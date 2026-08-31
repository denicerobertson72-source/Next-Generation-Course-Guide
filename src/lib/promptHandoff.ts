import { findAlignmentIssues } from "@/src/lib/alignment";
import type { Assignment, CourseRecord, ExternalAIFeedback } from "@/src/types/course";

export type HandoffTask = ExternalAIFeedback["task"];
export type PromptHandoff = { task: HandoffTask; prompt: string; sources: string[]; attachDocument: boolean };
const label = (task: HandoffTask) => ({ "course-review": "whole-course review", outcomes: "learning outcomes", alignment: "assessment alignment", "active-learning": "active learning", "transparent-design": "transparent assignment design", "ai-assignment": "AI and assignment design", "ai-policy": "AI-use guidance" })[task];
export function buildPromptHandoff(course: CourseRecord, task: HandoffTask, assignment?: Assignment): PromptHandoff {
  const issues = findAlignmentIssues(course).map((issue) => issue.message);
  const sources: string[] = []; const context: string[] = [];
  if (course.title || course.description) { context.push(`Course: ${course.title || "Untitled course"}${course.description ? ` — ${course.description}` : ""}.`); sources.push("faculty-entered course context"); }
  if (["course-review", "outcomes", "alignment", "active-learning", "ai-policy"].includes(task) && course.slos.length) { context.push(`Learning outcomes:\n${course.slos.map((s, i) => `${i + 1}. ${s.statement} (Level of thinking: ${s.bloomLevel})`).join("\n")}`); sources.push(`${course.slos.length} learning outcomes`); }
  if (["course-review", "alignment"].includes(task) && course.assessments.length) { context.push(`Assessments:\n${course.assessments.map((a) => `- ${a.title} (${a.type}); linked outcomes: ${a.linkedSloIds.length}`).join("\n")}`); sources.push(`${course.assessments.length} assessments`); }
  if (["course-review", "alignment", "active-learning"].includes(task) && issues.length) { context.push(`Course Guide's initial non-AI review identified these possible issues. Treat them as hypotheses, not facts:\n${issues.map((i) => `- ${i}`).join("\n")}`); sources.push("Standard alignment findings"); }
  if (task === "active-learning" && course.activities.length) { context.push(`Existing Activity Builder selections:\n${course.activities.map((a) => `- ${a.activityName}: ${a.rationale[0] ?? "selected by faculty"}`).join("\n")}`); sources.push("Activity Builder recommendations"); }
  if (assignment) { context.push(`Assignment: ${assignment.title}\n${(assignment.workingText || assignment.originalText).slice(0, 6000)}`); context.push(`TiLT fields: Purpose: ${assignment.tilt.purpose.join("; ") || "not confirmed"}; Task: ${assignment.tilt.task.join("; ") || "not confirmed"}; Criteria: ${assignment.tilt.criteria.join("; ") || "not confirmed"}.`); sources.push("faculty-provided assignment text", "TiLT fields"); if (assignment.standardReview) { context.push(`Standard Review findings:\n${assignment.standardReview.findings.map((f) => `- ${f.detail}`).join("\n")}`); sources.push("Standard Assignment Review"); } }
  const request = `Please provide prioritized, actionable feedback on ${label(task)}. Preserve faculty judgment. Explain why each recommendation matters. Do not rewrite faculty material unless I explicitly ask. Flag assumptions and avoid treating the Course Guide's deterministic findings as authoritative.`;
  const attachDocument = Boolean((task === "course-review" && course.materials.some((m) => m.scope === "course" && m.characterCount > 6000)) || (assignment && (assignment.workingText || assignment.originalText).length > 6000));
  if (attachDocument) context.push("The source document is too long to include fully. Ask me to attach it separately if you need additional context.");
  return { task, prompt: `${request}\n\n${context.join("\n\n")}`, sources, attachDocument };
}
