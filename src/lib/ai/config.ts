import "server-only";
import { aiFeatureAvailability, getAiFeatureConfig } from "@/src/lib/ai/featureConfig";

export type AiConfigurationStatus = { configured: boolean; message: string; model: string; vectorStoreConfigured: boolean };

export function getAiConfigurationStatus(): AiConfigurationStatus {
  const feature = aiFeatureAvailability("sloReview"); const config = getAiFeatureConfig(); const hasKey = Boolean(process.env.OPENAI_API_KEY); const hasVectorStore = Boolean(process.env.OPENAI_KNOWLEDGE_VECTOR_STORE_ID);
  const configured = feature.available && hasKey && hasVectorStore;
  return { configured, vectorStoreConfigured: hasVectorStore, model: config.models.routine, message: !feature.available ? feature.message : configured ? "Knowledge-grounded AI services are configured for this server." : !hasKey ? "AI development state: OPENAI_API_KEY is not configured; no material will be sent to OpenAI." : "AI development state: OPENAI_KNOWLEDGE_VECTOR_STORE_ID is not configured; knowledge-grounded AI is unavailable." };
}
