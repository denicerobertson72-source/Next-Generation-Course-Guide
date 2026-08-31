import { describe, expect, it } from "vitest";
import { isAiSloReview } from "@/src/lib/ai/slo";

const valid = { originalSlo: "Students will analyze evidence.", overallSummary: "Useful starting point.", dimensions: ["student-centered", "measurable", "inclusive", "higher-order"].map((dimension) => ({ dimension, status: "strong", rationale: "Clear." })), likelyCognitiveLevel: { level: "analyze", rationale: "Observable verb." }, vagueOrNonobservableWording: [], portabilityAndTransfer: { status: "review-suggested", rationale: "Could name a context." }, courseContextConsideration: "Check fit.", strengths: ["Observable"], considerations: [], suggestedRevision: "Students will analyze evidence in context.", revisionExplanation: "Adds context." };

describe("AI structured-output validation", () => {
  it("accepts the complete structured SLO review shape", () => expect(isAiSloReview(valid)).toBe(true));
  it("rejects malformed or incomplete output", () => expect(isAiSloReview({ originalSlo: "Only an outcome" })).toBe(false));
});
