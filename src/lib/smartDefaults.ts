import type { Activity, ActivityPackage, Assumption, RecommendationAnswers } from "@/src/types/course";
import { buildTilt } from "@/src/lib/tilt";
import { ACTIVITY_ENHANCEMENTS } from "@/src/data/activityEnhancements";

export function deriveActivityDefaults(activity: Activity, answers: RecommendationAnswers) {
  const priorities = answers.context.priorities ?? [];
  const assumptions: Assumption[] = [];
  const add = (what: string, why: string, where: string) => assumptions.push({ what, why, where });
  let grouping = answers.context.grouping;
  if (!grouping || grouping === "flexible") { grouping = activity.groupingOptions.includes("individual") ? "individual" : activity.groupingOptions[0] ?? "flexible"; add(`Grouping: ${grouping.replaceAll("-", " ")}`, "No faculty grouping preference was entered; the activity's supported grouping was used.", "Activity instructions"); }
  let grading: ActivityPackage["grading"] = "completion";
  if (answers.context.time === "t5" || answers.context.time === "t15") { grading = "ungraded"; add("Ungraded activity", "Short activities default to ungraded or completion-based practice.", "Student-facing instructions"); }
  else if (answers.context.time === "multi") { grading = "graded"; add("Graded activity", "A multi-session activity normally warrants an explicit evaluation approach.", "Faculty plan"); }
  else add("Completion credit", "No grading approach was selected.", "Faculty plan");
  const feedback: ActivityPackage["feedback"] = priorities.includes("low-grading") ? "whole-class" : activity.intellectualActions.includes("peer-feedback") ? "peer" : "brief";
  add(`${feedback.replaceAll("-", " ")} feedback`, priorities.includes("low-grading") ? "Minimal grading was prioritized." : activity.intellectualActions.includes("peer-feedback") ? "The selected activity centers peer feedback." : "A brief response is a practical default.", "Faculty facilitation notes");
  if ((answers.context.format === "async-online" || answers.context.format === "sync-online") && !(answers.context.tech ?? []).includes("lms")) add("LMS access assumed", "The selected online modality normally needs an LMS submission or discussion space.", "Technology notes");
  return { grouping, grading, feedback, assumptions };
}

export function buildActivityPackage(activity: Activity, answers: RecommendationAnswers, input: { topic: string; outcome?: string; mode: ActivityPackage["mode"] }): ActivityPackage {
  const defaults = deriveActivityDefaults(activity, answers);
  const baseTilt = buildTilt(activity, { outcome: input.outcome, action: answers.goal.actionPrimary, stage: answers.goal.stage, time: answers.context.time, topic: input.topic });
  const enhancement = ACTIVITY_ENHANCEMENTS[activity.id];
  const fill = (text: string) => text.replaceAll("{topic}", input.topic || "this course topic").replaceAll("{concept}", input.topic || "the focal concept");
  const tilt = enhancement ? { ...baseTilt, purpose: [input.outcome || `Practice ${answers.goal.actionPrimary?.replaceAll("-", " ") ?? "course thinking"}.`, ...enhancement.knowledge.map(fill), fill(enhancement.relevance)], task: [...(enhancement.preparation ?? []).map(fill), ...baseTilt.task], criteria: enhancement.successCriteria.map(fill) } : baseTilt;
  return { mode: input.mode, title: `${activity.name}: ${input.topic || "course activity"}`, grouping: defaults.grouping ?? "flexible", grading: defaults.grading, feedback: defaults.feedback, tilt, assumptions: defaults.assumptions, instructorNotes: [...(enhancement?.facultySteps ?? activity.templateData?.debrief ?? ["Close by naming a pattern in student reasoning and the next step in the course."]).map(fill), `Evidence to look for: ${enhancement ? fill(enhancement.evidence) : activity.evidenceProduced ?? "reviewable student responses"}.`, `Review burden: ${activity.reviewBurden}.`, activity.accessibilityNotes || "Provide written instructions, think time, and a flexible response format where feasible."] };
}
