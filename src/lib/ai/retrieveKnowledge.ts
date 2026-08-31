import "server-only";
import { getAiConfigurationStatus } from "@/src/lib/ai/config";

export type KnowledgeChunk = { filename: string; fileId: string; score: number; text: string };
export type KnowledgeRetrieval = { configured: boolean; message: string; chunks: KnowledgeChunk[] };

/** Direct retrieval seam for future structured services; it does not receive faculty-uploaded course files. */
export async function retrieveKnowledge(query: string, maxResults = 6): Promise<KnowledgeRetrieval> {
  const status = getAiConfigurationStatus(); const vectorStoreId = process.env.OPENAI_KNOWLEDGE_VECTOR_STORE_ID;
  if (!status.configured || !vectorStoreId) return { configured: false, message: status.message, chunks: [] };
  const response = await fetch(`https://api.openai.com/v1/vector_stores/${vectorStoreId}/search`, { method: "POST", headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ query, max_num_results: Math.min(50, Math.max(1, maxResults)) }) });
  if (!response.ok) return { configured: false, message: `Knowledge retrieval failed (${response.status}).`, chunks: [] };
  const body = await response.json() as { data?: Array<{ filename?: string; file_id?: string; score?: number; content?: Array<{ text?: string }> }> };
  return { configured: true, message: "Retrieved project knowledge sources.", chunks: (body.data ?? []).map((item) => ({ filename: item.filename ?? "Untitled knowledge file", fileId: item.file_id ?? "", score: item.score ?? 0, text: item.content?.map((content) => content.text ?? "").join("\n") ?? "" })) };
}
