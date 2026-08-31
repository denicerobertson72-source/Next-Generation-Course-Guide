import { afterEach, describe, expect, it } from "vitest";
import { requestSloReview } from "@/src/lib/ai/client";
import { prototypeUsageLedger } from "@/src/lib/ai/usageLedger";

const prior = { key: process.env.OPENAI_API_KEY, store: process.env.OPENAI_KNOWLEDGE_VECTOR_STORE_ID, enabled: process.env.AI_ENABLED, feature: process.env.AI_FEATURE_SLO_REVIEW, model: process.env.AI_ROUTINE_MODEL };
afterEach(() => { process.env.OPENAI_API_KEY = prior.key; process.env.OPENAI_KNOWLEDGE_VECTOR_STORE_ID = prior.store; process.env.AI_ENABLED = prior.enabled; process.env.AI_FEATURE_SLO_REVIEW = prior.feature; process.env.AI_ROUTINE_MODEL = prior.model; });
const response = { originalSlo: "Students will analyze evidence.", overallSummary: "Clear starting point.", dimensions: ["student-centered", "measurable", "inclusive", "higher-order"].map((dimension) => ({ dimension, status: "strong", rationale: "Clear." })), likelyCognitiveLevel: { level: "analyze", rationale: "Observable verb." }, vagueOrNonobservableWording: [], portabilityAndTransfer: { status: "review-suggested", rationale: "Name a transfer setting." }, courseContextConsideration: "Fits course context.", strengths: ["Observable"], considerations: [], suggestedRevision: "Students will analyze evidence in a disciplinary context.", revisionExplanation: "Adds context." };

describe("Responses SLO review client", () => {
  it("accepts mocked structured output and exposes only returned source metadata", async () => {
    process.env.OPENAI_API_KEY = "test-key"; process.env.OPENAI_KNOWLEDGE_VECTOR_STORE_ID = "vs_test"; process.env.AI_ENABLED = "true"; process.env.AI_FEATURE_SLO_REVIEW = "true"; process.env.AI_ROUTINE_MODEL = "routine-test";
    const fetcher = async () => new Response(JSON.stringify({ output_text: JSON.stringify(response), output: [{ type: "file_search_call", results: [{ filename: "Approved SLO guidance.pdf", file_id: "file-1", score: 0.93, attributes: { knowledge_category: "Reviewing & Creating SLOs with AI" } }] }] }), { status: 200 });
    const result = await requestSloReview("review this", fetcher as typeof fetch);
    expect(result.sources).toEqual([{ filename: "Approved SLO guidance.pdf", fileId: "file-1", score: 0.93, category: "Reviewing & Creating SLOs with AI" }]);
    const usage = prototypeUsageLedger.allRecords().at(-1);
    expect(usage).toMatchObject({ feature: "sloReview", model: "routine-test", fileSearchUsed: true });
    expect(usage?.actualCalculatedCost).not.toBeNull();
  });
  it("rejects malformed structured output", async () => {
    process.env.OPENAI_API_KEY = "test-key"; process.env.OPENAI_KNOWLEDGE_VECTOR_STORE_ID = "vs_test"; process.env.AI_ENABLED = "true"; process.env.AI_FEATURE_SLO_REVIEW = "true"; process.env.AI_ROUTINE_MODEL = "routine-test";
    await expect(requestSloReview("review", (async () => new Response(JSON.stringify({ output_text: "not json" }), { status: 200 })) as typeof fetch)).rejects.toThrow("malformed");
  });
  it("does not make an API request while AI is globally disabled", async () => {
    process.env.AI_ENABLED = "false"; let calls = 0;
    await expect(requestSloReview("review", (async () => { calls += 1; return new Response(); }) as typeof fetch)).rejects.toThrow("disabled");
    expect(calls).toBe(0);
  });
});
