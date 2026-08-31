import type { ActivityPackage } from "@/src/types/course";

export function checkActivityPackageQuality(pkg: ActivityPackage) {
  return [
    { group: "Purpose", label: "A student-facing purpose is present", status: pkg.tilt.purpose.length >= 2 ? "meets" : "attention" },
    { group: "Purpose", label: "Purpose is proportionate to activity scale", status: pkg.mode === "quick" && pkg.tilt.purpose.join(" ").split(/\s+/).length > 120 ? "consider" : "meets" },
    { group: "Task", label: "Instructions use observable, specific actions", status: pkg.tilt.task.length >= 2 ? "meets" : "attention" },
    { group: "Task", label: "Expected product and evidence are defined", status: pkg.instructorNotes.some((note) => note.startsWith("Evidence to look for:")) ? "meets" : "consider" },
    { group: "Task", label: "Individual accountability is considered for group work", status: ["pairs", "small-groups", "whole-class"].includes(pkg.grouping) ? "consider" : "meets" },
    { group: "Criteria", label: "Criteria for success are present", status: pkg.tilt.criteria.length ? "meets" : "attention" },
    { group: "Criteria", label: "Criteria are proportionate to the activity", status: pkg.mode === "quick" && pkg.tilt.criteria.length > 5 ? "consider" : "meets" },
    { group: "Alignment", label: "Purpose, task, and criteria share a learning focus", status: pkg.tilt.purpose.length && pkg.tilt.task.length && pkg.tilt.criteria.length ? "meets" : "attention" },
    { group: "Logistics", label: "Feedback plan is named", status: pkg.feedback ? "meets" : "attention" },
    { group: "Logistics", label: "Faculty assumptions are visible", status: pkg.assumptions.length ? "meets" : "consider" },
    { group: "Logistics", label: "Facilitation/debrief notes are available", status: pkg.instructorNotes.length > 2 ? "meets" : "consider" }
  ];
}
