import "server-only";
import type { AiModelTier } from "@/src/lib/ai/featureConfig";

export type PricingAssumption = { inputCostPerMillionTokens: number; outputCostPerMillionTokens: number };
const number = (value: string | undefined, fallback = 0) => Number.isFinite(Number(value)) && Number(value) >= 0 ? Number(value) : fallback;
export function pricingForTier(tier: AiModelTier): PricingAssumption | null { const model = tier === "routine" ? process.env.AI_ROUTINE_MODEL : process.env.AI_ADVANCED_MODEL; if (!model) return null; return { inputCostPerMillionTokens: number(tier === "routine" ? process.env.AI_ROUTINE_INPUT_COST_PER_MILLION : process.env.AI_ADVANCED_INPUT_COST_PER_MILLION), outputCostPerMillionTokens: number(tier === "routine" ? process.env.AI_ROUTINE_OUTPUT_COST_PER_MILLION : process.env.AI_ADVANCED_OUTPUT_COST_PER_MILLION) }; }
export function fileSearchCost() { return number(process.env.AI_FILE_SEARCH_COST_PER_SEARCH); }
export function vectorStorageRate() { return number(process.env.AI_VECTOR_STORAGE_COST_PER_GB_DAY); }
export function calculateCost(inputTokens: number, outputTokens: number, tier: AiModelTier, fileSearchUsed: boolean) { const pricing = pricingForTier(tier); if (!pricing) return null; return (inputTokens / 1_000_000) * pricing.inputCostPerMillionTokens + (outputTokens / 1_000_000) * pricing.outputCostPerMillionTokens + (fileSearchUsed ? fileSearchCost() : 0); }
export function estimateCost(inputText: string, tier: AiModelTier, fileSearchUsed: boolean) { return calculateCost(Math.ceil(inputText.length / 4), tier === "routine" ? 450 : 1_200, tier, fileSearchUsed); }
