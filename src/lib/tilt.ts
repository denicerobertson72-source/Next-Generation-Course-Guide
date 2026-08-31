import type { Activity, TiltSection } from "@/src/types/course";

const actionLabel = (action?: string) => action?.replaceAll("-", " ") ?? "apply course ideas";

export function buildTilt(activity: Activity, input: { outcome?: string; action?: string; stage?: string; time?: string; topic?: string }): TiltSection {
  const level = input.time === "t5" || input.time === "t15" ? "quick" : input.time === "multi" || input.time === "t50plus" ? "extended" : "standard";
  const templateSteps = activity.templateData?.studentSteps ?? [];
  const steps = templateSteps.length ? templateSteps.map((step) => step.replaceAll("{topic}", input.topic || "this course topic")) : ["Read the prompt and identify the specific question or problem.", `Complete the activity by ${actionLabel(input.action)}.`, "Record the evidence, reasoning, or product requested by your instructor."];
  return {
    level,
    purpose: [input.outcome || `Practice ${actionLabel(input.action)} in ${input.topic || "this course"}.`, `This ${activity.name} activity supports learning before the next assessment.`],
    task: steps,
    criteria: ["Respond to every required part of the task.", `Use relevant course concepts or evidence to ${actionLabel(input.action)}.`, "Make your reasoning visible enough for you and others to review."]
  };
}

export function assessTiltCompleteness(tilt: TiltSection) {
  return [
    { section: "Purpose", status: tilt.purpose.length ? "Complete" : "Needs information", detail: tilt.purpose.length ? "Explains why the work matters." : "Add the connection to learning." },
    { section: "Task", status: tilt.task.length >= 2 ? "Complete" : "Needs information", detail: tilt.task.length >= 2 ? "Provides observable student steps." : "Add clear, numbered student actions." },
    { section: "Criteria for success", status: tilt.criteria.length ? "Complete" : "Needs information", detail: tilt.criteria.length ? "Gives students a usable self-check." : "Add criteria students can use before submitting." }
  ];
}
