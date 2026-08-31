import "server-only";
import { isAiSloReview, type AiSloReview } from "@/src/lib/ai/slo";
import { getAiConfigurationStatus } from "@/src/lib/ai/config";
import { featureTier, getAiFeatureConfig } from "@/src/lib/ai/featureConfig";
import { calculateCost, estimateCost } from "@/src/lib/ai/pricing";
import { checkAiLimits } from "@/src/lib/ai/limits";
import { prototypeUsageLedger, prototypeUserKey } from "@/src/lib/ai/usageLedger";

const endpoint = "https://api.openai.com/v1/responses";
const schema = { type: "object", additionalProperties: false, required: ["originalSlo", "overallSummary", "dimensions", "likelyCognitiveLevel", "vagueOrNonobservableWording", "portabilityAndTransfer", "courseContextConsideration", "strengths", "considerations", "suggestedRevision", "revisionExplanation"], properties: { originalSlo: { type: "string" }, overallSummary: { type: "string" }, dimensions: { type: "array", minItems: 4, maxItems: 4, items: { type: "object", additionalProperties: false, required: ["dimension", "status", "rationale"], properties: { dimension: { type: "string", enum: ["student-centered", "measurable", "inclusive", "higher-order"] }, status: { type: "string", enum: ["strong", "review-suggested", "needs-faculty-consideration"] }, rationale: { type: "string" } } } }, likelyCognitiveLevel: { type: "object", additionalProperties: false, required: ["level", "rationale"], properties: { level: { type: "string", enum: ["remember", "understand", "apply", "analyze", "evaluate", "create", "unclear"] }, rationale: { type: "string" } } }, vagueOrNonobservableWording: { type: "array", items: { type: "string" } }, portabilityAndTransfer: { type: "object", additionalProperties: false, required: ["status", "rationale"], properties: { status: { type: "string", enum: ["strong", "review-suggested", "needs-faculty-consideration"] }, rationale: { type: "string" } } }, courseContextConsideration: { type: "string" }, strengths: { type: "array", items: { type: "string" } }, considerations: { type: "array", items: { type: "string" } }, suggestedRevision: { type: "string" }, revisionExplanation: { type: "string" } } };
type Fetcher = typeof fetch;

function actualSources(output: unknown) {
  const items = Array.isArray(output) ? output : [];
  const seen = new Set<string>();
  return items.flatMap((item: any) => Array.isArray(item?.results) ? item.results : []).map((r: any) => ({ filename: String(r.filename ?? "Knowledge source"), fileId: r.file_id ? String(r.file_id) : undefined, score: typeof r.score === "number" ? r.score : undefined, category: typeof r.attributes?.knowledge_category === "string" ? r.attributes.knowledge_category : undefined })).filter((s) => { const key = `${s.fileId}:${s.filename}`; if (seen.has(key)) return false; seen.add(key); return true; });
}

export async function requestSloReview(input: string, fetcher: Fetcher = fetch): Promise<AiSloReview> {
  const status = getAiConfigurationStatus(); const apiKey = process.env.OPENAI_API_KEY; const vectorStoreId = process.env.OPENAI_KNOWLEDGE_VECTOR_STORE_ID;
  if (!status.configured || !apiKey || !vectorStoreId) throw new Error(status.message);
  const tier = featureTier("sloReview"); const estimatedCost = estimateCost(input, tier, true); const limits = checkAiLimits(estimatedCost); if (!limits.allowed) throw new Error(limits.message);
  const model = getAiFeatureConfig().models.routine;
  const response = await fetcher(endpoint, { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ model, store: false, instructions: "You are an educational-design assistant. Ground claims only in retrieved project knowledge when it is relevant. Do not evaluate faculty as correct or incorrect.", input, tools: [{ type: "file_search", vector_store_ids: [vectorStoreId], max_num_results: 6 }], include: ["file_search_call.results"], text: { format: { type: "json_schema", name: "slo_review", strict: true, schema } } }) });
  if (!response.ok) throw new Error(response.status === 429 ? "AI review is temporarily rate-limited. Please try again shortly." : `OpenAI request failed (${response.status}).`);
  const payload = await response.json() as { output_text?: string; output?: unknown; usage?: { input_tokens?: number; output_tokens?: number } };
  let parsed: unknown; try { parsed = JSON.parse(payload.output_text ?? ""); } catch { throw new Error("AI returned malformed structured output."); }
  if (!isAiSloReview(parsed)) throw new Error("AI response did not match the required SLO review structure.");
  const sources = actualSources(payload.output); const inputTokens = payload.usage?.input_tokens ?? Math.ceil(input.length / 4); const outputTokens = payload.usage?.output_tokens ?? 0;
  prototypeUsageLedger.record({ timestamp: new Date().toISOString(), userKey: prototypeUserKey, feature: "sloReview", model, tier, inputTokens, outputTokens, fileSearchUsed: true, estimatedCost, actualCalculatedCost: calculateCost(inputTokens, outputTokens, tier, true) });
  return { ...parsed, sources, assumptions: sources.length ? ["Review is grounded in the retrieved project knowledge sources shown below."] : ["No visible knowledge-source result was returned; use this review as a faculty consideration, not source-grounded guidance."] };
}
