import type { CourseRecord } from "@/src/types/course";

export function courseDesignMarkdown(course: CourseRecord): string {
  const lines = [`# Next Generation Course Design Guide`, ``, `## ${course.code ? `${course.code}: ` : ""}${course.title || "Untitled course"}`, course.description, ``, `## Course design intent`, course.designIntent || "Not yet recorded.", ``, `## Student learning outcomes`, ...course.slos.map((slo) => `- ${slo.statement} (${slo.bloomLevel}; ${slo.confirmed ? "faculty confirmed" : "faculty review pending"})`), ``, `## Assessments`, ...course.assessments.map((assessment) => `- ${assessment.title} (${assessment.type}) — ${assessment.evidence || "Evidence details not yet recorded."}`), ``, `## Learning activities`, ...course.activities.map((activity) => `- ${activity.activityName} — ${activity.recommendationPct}% deterministic recommendation fit.`), ``, `## Assignments`, ...course.assignments.map((assignment) => `- ${assignment.title}`), ``, `## Intentional AI decisions`, ...course.aiDecisions.map((decision) => `- ${decision.framework.toUpperCase()}: ${decision.studentFacingStatement}`), ``, `## Reflection log`, ...course.reflections.map((reflection) => `- ${reflection.stage}: ${reflection.skipped ? "Skipped" : reflection.response}`), ``, `## Sources & assumptions (faculty-facing)`, ...course.sources.flatMap((source) => [`- ${source.scope}: ${source.template ?? "No template recorded"}`, ...source.assumptions.map((assumption) => `  - Assumption: ${assumption.what} — ${assumption.why}`)]), ``];
  return lines.join("\n");
}

export function downloadMarkdown(filename: string, content: string) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([content], { type: "text/markdown" }));
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}
