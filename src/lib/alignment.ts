import type { CourseRecord } from "@/src/types/course";

export type AlignmentIssue = {
  code: "outcome-without-assessment" | "assessment-without-outcome" | "outcome-without-practice" | "assessment-without-preparation" | "activity-without-purpose" | "cognitive-demand-review";
  entityId: string;
  message: string;
  severity?: "possible-alignment-issue" | "review-suggested";
};

/** Deterministic relationship checks only; pedagogical interpretation belongs in a separately labeled analysis. */
export function findAlignmentIssues(course: CourseRecord): AlignmentIssue[] {
  const issues: AlignmentIssue[] = [];
  for (const slo of course.slos) {
    if (!course.assessments.some((assessment) => assessment.linkedSloIds.includes(slo.id))) issues.push({ code: "outcome-without-assessment", entityId: slo.id, message: "This outcome is not yet linked to assessment evidence." });
    if (!course.activities.some((activity) => activity.linkedSloIds.includes(slo.id))) issues.push({ code: "outcome-without-practice", entityId: slo.id, message: "This outcome is not yet linked to a learning activity." });
  }
  for (const assessment of course.assessments) {
    if (!assessment.linkedSloIds.length) issues.push({ code: "assessment-without-outcome", entityId: assessment.id, message: "This assessment is not yet linked to an outcome." });
    if (assessment.type === "summative" && !course.activities.some((activity) => activity.linkedAssessmentIds.includes(assessment.id))) issues.push({ code: "assessment-without-preparation", entityId: assessment.id, message: "This summative assessment has no activity explicitly marked as preparation." });
    const linkedSlos = course.slos.filter((slo) => assessment.linkedSloIds.includes(slo.id));
    if (assessment.cognitiveLevel && linkedSlos.some((slo) => cognitiveGap(slo.bloomLevel, assessment.cognitiveLevel!))) issues.push({ code: "cognitive-demand-review", entityId: assessment.id, severity: "review-suggested", message: "Review suggested: the selected assessment demand is substantially below a linked outcome. Faculty decision needed." });
  }
  for (const activity of course.activities) if (!activity.linkedSloIds.length && !activity.linkedAssessmentIds.length) issues.push({ code: "activity-without-purpose", entityId: activity.id, message: "This activity is not yet linked to an outcome or assessment." });
  return issues;
}

const cognitiveOrder = ["remember", "understand", "apply", "analyze", "evaluate", "create"] as const;
function cognitiveGap(outcome: typeof cognitiveOrder[number], evidence: typeof cognitiveOrder[number]) {
  return cognitiveOrder.indexOf(outcome) - cognitiveOrder.indexOf(evidence) >= 2;
}
