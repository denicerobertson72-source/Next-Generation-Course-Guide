import { courseReviewCategories, type ReviewCriterion } from "@/src/data/courseReviewLibrary";
import { pathways } from "@/src/lib/courseDesignStory";
import type { CourseRecord } from "@/src/types/course";

export function reviewEvidence(course: CourseRecord, criterion: ReviewCriterion) {
  const paths = pathways(course); const evidencePaths = paths.filter((path) => path.evidence.length).length; const practicePaths = paths.filter((path) => path.practices.length).length;
  if (criterion.id === "measurable-objectives") return course.slos.length ? `${course.slos.length} saved outcome${course.slos.length === 1 ? "" : "s"}; ${course.outcomeDesignDecisions?.length ?? 0} approved outcome revision${(course.outcomeDesignDecisions?.length ?? 0) === 1 ? "" : "s"}.` : "No saved outcomes yet.";
  if (criterion.id === "aligned-activities-assessments") return `${course.slos.length} outcomes; ${evidencePaths} with assessment evidence; ${practicePaths} with connected practice.`;
  if (criterion.id === "scaffolded-activities") return `${course.activities.length} saved learning experience${course.activities.length === 1 ? "" : "s"}; ${course.learningExperienceDesignDecisions?.length ?? 0} approved practice design${(course.learningExperienceDesignDecisions?.length ?? 0) === 1 ? "" : "s"}.`;
  if (criterion.id === "critical-thinking") return `${course.slos.length} outcomes and ${course.activities.length} learning experiences are available for faculty review.`;
  if (criterion.id === "grading-criteria") return `${course.assignments.length} saved assignment${course.assignments.length === 1 ? "" : "s"}; ${course.assignments.filter((assignment) => assignment.tilt.criteria.length).length} with saved TiLT criteria.`;
  if (criterion.id === "visible-thinking" || criterion.id === "scaffolded-ai") return `${course.assessmentDesignDecisions?.filter((decision) => decision.pattern === "visible-thinking" || decision.pattern === "checkpoints").length ?? 0} saved assessment design decision${(course.assessmentDesignDecisions?.length ?? 0) === 1 ? "" : "s"} related to visible thinking or checkpoints.`;
  if (criterion.id === "cognitive-load") return `${paths.filter((path) => path.state === "complete" || path.state === "multiple-connections").length} represented complete pathway${paths.filter((path) => path.state === "complete" || path.state === "multiple-connections").length === 1 ? "" : "s"}; ${course.outcomeDesignDecisions?.length ?? 0} outcome, ${course.assessmentDesignDecisions?.length ?? 0} assessment, and ${course.learningExperienceDesignDecisions?.length ?? 0} learning-experience decisions saved.`;
  return criterion.guidance;
}

export const reviewCategory = (id: string) => courseReviewCategories.find((category) => category.id === id);
