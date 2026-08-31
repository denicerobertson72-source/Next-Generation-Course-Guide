import type { AiSloReviewRecord, SLO } from "@/src/types/course";

export type AiSloReview = AiSloReviewRecord;
const levels = ["remember", "understand", "apply", "analyze", "evaluate", "create", "unclear"];
const statuses = ["strong", "review-suggested", "needs-faculty-consideration"];
const dimensions = ["student-centered", "measurable", "inclusive", "higher-order"];

export function isAiSloReview(value: unknown): value is AiSloReview {
  if (!value || typeof value !== "object") return false;
  const r = value as Partial<AiSloReview>;
  return typeof r.originalSlo === "string" && typeof r.overallSummary === "string" && Array.isArray(r.dimensions) && r.dimensions.length === 4 && r.dimensions.every((d) => d && dimensions.includes(d.dimension) && statuses.includes(d.status) && typeof d.rationale === "string") && Boolean(r.likelyCognitiveLevel && levels.includes(r.likelyCognitiveLevel.level) && typeof r.likelyCognitiveLevel.rationale === "string") && Array.isArray(r.vagueOrNonobservableWording) && Boolean(r.portabilityAndTransfer && statuses.includes(r.portabilityAndTransfer.status) && typeof r.portabilityAndTransfer.rationale === "string") && typeof r.courseContextConsideration === "string" && Array.isArray(r.strengths) && Array.isArray(r.considerations) && typeof r.suggestedRevision === "string" && typeof r.revisionExplanation === "string";
}

export type SloReviewContext = { title: string; discipline: string; level: string; modality: string; description: string; goals: string[]; materialExcerpts: Array<{ filename: string; text: string }> };

export function sloPrompt(slo: Pick<SLO, "statement" | "bloomLevel">, context: SloReviewContext) {
  return `Review this faculty-authored student learning outcome as decision support, not a pass/fail verdict. Use careful language: Strong, Review suggested, or Needs faculty consideration. Do not invent citations; sources are attached by the service from File Search results. Prioritize portable outcomes/transfer, backward design, Bloom/observable outcomes, inclusive design, and relevant NKU guidance.\n\nCourse context (only relevant fields): ${JSON.stringify(context)}\n\nOriginal SLO: ${slo.statement}\nFaculty-selected cognitive level: ${slo.bloomLevel}\n\nReturn the requested JSON. Preserve faculty authorship; make the revision concise and editable.`;
}
