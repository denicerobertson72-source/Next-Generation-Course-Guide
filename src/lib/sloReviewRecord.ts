import type { AiSloReviewRecord, CourseRecord, SLO, SloReviewHistoryEntry } from "@/src/types/course";

export function applySloReviewDecision(course: CourseRecord, slo: SLO, review: AiSloReviewRecord, decision: SloReviewHistoryEntry["decision"], finalStatement: string): CourseRecord {
  const now = new Date().toISOString();
  const entry: SloReviewHistoryEntry = { id: `slo-review-${Date.now()}`, reviewedAt: now, review, decision, finalStatement, decidedAt: now };
  const updatedSlo: SLO = { ...slo, originalStatement: slo.originalStatement ?? review.originalSlo, statement: finalStatement, confirmed: true, facultyDecision: decision === "kept-original" ? "kept-original" : "accepted", reviewHistory: [...(slo.reviewHistory ?? []), entry] };
  return { ...course, slos: course.slos.map((item) => item.id === slo.id ? updatedSlo : item), sources: [...course.sources, { id: `source-slo-review-${Date.now()}`, scope: `SLO review: ${slo.statement}`, facultyInputs: [review.originalSlo], assumptions: review.assumptions.map((what) => ({ what, why: "Visible with the AI review", where: "SLO review" })), knowledgeSources: review.sources.map((source) => source.filename), aiGenerated: true, informationNotUsed: ["No student-identifiable data", "No hidden prompts, tokens, or debug output"] }] };
}
