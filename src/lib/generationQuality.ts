import { ACTIVITY_ENHANCEMENTS } from "@/src/data/activityEnhancements";
import type { Activity, ActivityPackage } from "@/src/types/course";

export type GenerationQualityFlag = { code: string; status: "meets" | "consider" | "attention"; message: string };

/** Deterministic generation-quality flags adapted from the legacy Activity Builder package audit. */
export function generationQualityFlags(activity: Activity, pkg: ActivityPackage, topic: string): GenerationQualityFlag[] {
  const enhanced = Boolean(ACTIVITY_ENHANCEMENTS[activity.id]);
  const grouped = ["pairs", "small-groups", "whole-class"].includes(pkg.grouping);
  const allText = [...pkg.tilt.purpose, ...pkg.tilt.task, ...pkg.tilt.criteria].join(" ");
  return [
    { code: "template-specificity", status: enhanced ? "meets" : "consider", message: enhanced ? "Activity-specific facilitation and criteria templates were used." : "This activity uses the stored base template and general TiLT fallback; review for discipline-specific detail." },
    { code: "topic-anchor", status: topic.trim() && !/\{topic\}|this course topic/i.test(allText) ? "meets" : "consider", message: topic.trim() ? "Instructions are anchored to the supplied topic." : "Add a topic or material focus so prompts are not generic." },
    { code: "student-product", status: pkg.tilt.task.length >= 2 ? "meets" : "attention", message: pkg.tilt.task.length >= 2 ? "The package gives students observable steps and a visible product." : "Add observable student actions and a defined product." },
    { code: "debrief", status: pkg.instructorNotes.length > 2 ? "meets" : "consider", message: pkg.instructorNotes.length > 2 ? "Facilitation/debrief instructions are included." : "Add a debrief; activity becomes learning when students make sense of it." },
    { code: "accountability", status: !grouped ? "meets" : pkg.tilt.criteria.some((criterion) => /individual|each|your/i.test(criterion)) ? "meets" : "consider", message: !grouped ? "Individual work has inherent accountability." : "For group work, verify that each student leaves an individual trace of learning." },
    { code: "time-and-review", status: activity.reviewBurden === "detailed" && pkg.grading === "ungraded" ? "consider" : "meets", message: activity.reviewBurden === "detailed" && pkg.grading === "ungraded" ? "Detailed-review activity is currently ungraded; verify the feedback plan is realistic." : "The package records an explicit grading and feedback approach." }
  ];
}
