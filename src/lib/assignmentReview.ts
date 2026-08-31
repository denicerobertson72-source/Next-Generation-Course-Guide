import type { Assignment, AssignmentReview, SLO, TiltSection } from "@/src/types/course";

const has = (text: string, expression: RegExp) => expression.test(text);
export function standardAssignmentReview(assignment: Pick<Assignment, "workingText" | "originalText" | "linkedSloIds" | "linkedActivityIds">, slos: SLO[]): AssignmentReview {
  const text = (assignment.workingText || assignment.originalText || "").trim();
  const activityIds = assignment.linkedActivityIds ?? [];
  const findings: AssignmentReview["findings"] = [];
  findings.push({ area: "Structure", status: has(text, /submit|create|write|prepare|complete|produce|present/i) ? "looks-clear" : "information-not-found", detail: has(text, /submit|create|write|prepare|complete|produce|present/i) ? "Observable task language appears in the assignment." : "Information not found: what students will produce or do." });
  findings.push({ area: "Structure", status: has(text, /step|first|then|1\.|2\.|before|after/i) ? "looks-clear" : "review-suggested", detail: has(text, /step|first|then|1\.|2\.|before|after/i) ? "Instructions or stages appear to be present." : "Review suggested: make the sequence of student actions easier to find." });
  findings.push({ area: "Student clarity", status: has(text, /rubric|criteria|evaluat|success|grade/i) ? "looks-clear" : "information-not-found", detail: has(text, /rubric|criteria|evaluat|success|grade/i) ? "Evaluation or criteria language appears to be present." : "Information not found: how students can recognize successful work." });
  findings.push({ area: "Alignment", status: assignment.linkedSloIds.length ? "looks-clear" : "faculty-decision-needed", detail: assignment.linkedSloIds.length ? `${assignment.linkedSloIds.length} linked learning outcome(s) provide an explicit alignment reference.` : "Faculty decision needed: link this assignment to at least one learning outcome." });
  findings.push({ area: "Alignment", status: activityIds.length ? "looks-clear" : "review-suggested", detail: activityIds.length ? "Preparatory learning activity links are present." : "Review suggested: consider whether students need practice before this assignment." });
  if (slos.length && text.length > 1400 && !has(text, /\n\s*(?:\d+[.)]|[-•*])/)) findings.push({ area: "Student clarity", status: "review-suggested", detail: "Review suggested: long directions may benefit from visible sections or steps." });
  return { reviewedAt: new Date().toISOString(), findings };
}

export function tiltFromAssignment(text: string): TiltSection {
  return { level: "standard", purpose: has(text, /purpose|learn|outcome|goal/i) ? ["The assignment connects to stated learning or purpose language."] : [], task: has(text, /submit|create|write|prepare|complete|produce|present/i) ? ["Students are asked to complete an observable task."] : [], criteria: has(text, /rubric|criteria|evaluat|success|grade/i) ? ["Evaluation or success language appears in the assignment."] : [] };
}

export function createTransparentVersion(assignment: Assignment) {
  const original = assignment.workingText || assignment.originalText || "[Faculty input needed: Describe the assignment.]";
  const section = (title: string, values: string[], placeholder: string) => `## ${title}\n\n${values.length ? values.map((value) => `- ${value}`).join("\n") : `[Faculty input needed: ${placeholder}]`}`;
  return `${assignment.title}\n\n${section("Purpose", assignment.tilt.purpose, "Why does this work matter for student learning?")}\n\n${section("Task", assignment.tilt.task, "What should students do, create, and submit?")}\n\n${section("Criteria for Success", assignment.tilt.criteria, "What distinguishes strong work?")}\n\n## Assignment details\n\n${original}`;
}
