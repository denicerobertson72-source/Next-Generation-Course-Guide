import "server-only";

export type AiFeature = "sloReview" | "alignmentReview" | "assignmentReview" | "tiltEnhancement" | "intentionalAIReview" | "policyGeneration";
export type AiModelTier = "routine" | "advanced";
const bool = (value: string | undefined) => value === "true";
const whole = (value: string | undefined, fallback: number) => Number.isFinite(Number(value)) && Number(value) >= 0 ? Number(value) : fallback;
const money = (value: string | undefined, fallback: number) => Number.isFinite(Number(value)) && Number(value) >= 0 ? Number(value) : fallback;

export function getAiFeatureConfig() {
  return {
    aiEnabled: bool(process.env.AI_ENABLED),
    features: { sloReview: bool(process.env.AI_FEATURE_SLO_REVIEW ?? process.env.AI_ENABLED), alignmentReview: bool(process.env.AI_FEATURE_ALIGNMENT_REVIEW), assignmentReview: bool(process.env.AI_FEATURE_ASSIGNMENT_REVIEW), tiltEnhancement: bool(process.env.AI_FEATURE_TILT_ENHANCEMENT), intentionalAIReview: bool(process.env.AI_FEATURE_INTENTIONAL_AI_REVIEW), policyGeneration: bool(process.env.AI_FEATURE_POLICY_GENERATION) } satisfies Record<AiFeature, boolean>,
    models: { routine: process.env.AI_ROUTINE_MODEL ?? "", advanced: process.env.AI_ADVANCED_MODEL ?? "" } satisfies Record<AiModelTier, string>,
    limits: { requestsPerUserPerDay: whole(process.env.AI_REQUESTS_PER_USER_PER_DAY, 10), requestsPerUserPerMonth: whole(process.env.AI_REQUESTS_PER_USER_PER_MONTH, 100), estimatedSpendPerUserPerMonth: money(process.env.AI_USER_MONTHLY_BUDGET_USD, 5), projectMonthlyBudget: money(process.env.AI_PROJECT_MONTHLY_BUDGET_USD, 100) },
  };
}

export function featureTier(feature: AiFeature): AiModelTier { return ["assignmentReview", "alignmentReview", "intentionalAIReview", "policyGeneration"].includes(feature) ? "advanced" : "routine"; }
export function aiFeatureAvailability(feature: AiFeature) { const config = getAiFeatureConfig(); if (!config.aiEnabled) return { available: false, message: "AI-assisted features are disabled for this prototype. Standard Review remains available and does not use AI." }; if (!config.features[feature]) return { available: false, message: "This AI-assisted feature is not enabled." }; if (!config.models[featureTier(feature)]) return { available: false, message: "This AI-assisted feature has no model configured." }; return { available: true, message: "AI-assisted feature is available." }; }
