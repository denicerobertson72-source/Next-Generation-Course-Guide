import { describe, expect, it } from "vitest";
import { createBlankCourse } from "@/src/lib/course";
import { applySloReviewDecision } from "@/src/lib/sloReviewRecord";
import type { AiSloReviewRecord, SLO } from "@/src/types/course";

const review: AiSloReviewRecord = { originalSlo: "Students will understand ecology.", overallSummary: "Review suggested.", dimensions: ["student-centered", "measurable", "inclusive", "higher-order"].map((dimension) => ({ dimension: dimension as "student-centered", status: "review-suggested", rationale: "Consider wording." })), likelyCognitiveLevel: { level: "understand", rationale: "Verb is broad." }, vagueOrNonobservableWording: ["understand"], portabilityAndTransfer: { status: "review-suggested", rationale: "Add application." }, courseContextConsideration: "Fits an introductory course.", strengths: [], considerations: [], suggestedRevision: "Students will analyze ecological evidence.", revisionExplanation: "Uses an observable verb.", sources: [{ filename: "SLO guidance.pdf" }], assumptions: ["Course level supplied by faculty."] };
const slo: SLO = { id: "slo-1", statement: review.originalSlo, bloomLevel: "understand", confirmed: false };

describe("SLO review faculty decisions", () => {
  it.each([["accepted-revision", review.suggestedRevision], ["edited-revision", "Students will evaluate ecological evidence."], ["kept-original", review.originalSlo]] as const)("persists %s without a raw response", (decision, finalStatement) => {
    const course = { ...createBlankCourse("course-1"), slos: [slo] };
    const result = applySloReviewDecision(course, slo, review, decision, finalStatement);
    expect(result.slos[0].statement).toBe(finalStatement);
    expect(result.slos[0].reviewHistory?.[0].decision).toBe(decision);
    expect(result.sources[0].knowledgeSources).toEqual(["SLO guidance.pdf"]);
  });
});
