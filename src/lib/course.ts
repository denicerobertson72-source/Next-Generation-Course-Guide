import type { CourseRecord } from "@/src/types/course";

export function createBlankCourse(id: string): CourseRecord {
  const now = new Date().toISOString();
  return { id, title: "", code: "", discipline: "", level: "intro-ug", modality: "in-person", enrollment: null, description: "", designIntent: "", aspirationalGoals: [], slos: [], assessments: [], activities: [], assignments: [], aiDecisions: [], reflections: [], sources: [], materials: [], createdAt: now, updatedAt: now };
}

/** Upgrades the local prototype record without discarding faculty-entered content. */
export function normalizeCourseRecord(value: CourseRecord): CourseRecord {
  const now = new Date().toISOString();
  const slos = (value.slos ?? []).map((slo) => ({ ...slo, confirmed: slo.confirmed ?? false, bloomLevel: slo.bloomLevel ?? "analyze" }));
  const validSloIds = new Set(slos.map((slo) => slo.id));
  const assessments = (value.assessments ?? []).map((assessment) => ({ ...assessment, linkedSloIds: (assessment.linkedSloIds ?? []).filter((id) => validSloIds.has(id)), evidence: assessment.evidence ?? "", weight: assessment.weight ?? null }));
  const validAssessmentIds = new Set(assessments.map((assessment) => assessment.id));
  const activities = (value.activities ?? []).map((activity) => ({ ...activity, linkedSloIds: (activity.linkedSloIds ?? []).filter((id) => validSloIds.has(id)), linkedAssessmentIds: (activity.linkedAssessmentIds ?? []).filter((id) => validAssessmentIds.has(id)), rationale: activity.rationale ?? [] }));
  const assignments = (value.assignments ?? []).map((assignment) => ({ ...assignment, workingText: assignment.workingText ?? assignment.revisedText ?? assignment.originalText ?? "", linkedActivityIds: assignment.linkedActivityIds ?? [], facultyDecisions: assignment.facultyDecisions ?? [], createdAt: assignment.createdAt ?? value.createdAt ?? now, updatedAt: assignment.updatedAt ?? value.updatedAt ?? now }));
  return { ...value, slos, assessments, activities, designIntent: value.designIntent ?? "", aspirationalGoals: value.aspirationalGoals ?? [], assignments, aiDecisions: value.aiDecisions ?? [], reflections: value.reflections ?? [], sources: value.sources ?? [], materials: value.materials ?? [], externalAIFeedback: value.externalAIFeedback ?? [], outcomeDesignDecisions: value.outcomeDesignDecisions ?? [], assessmentDesignDecisions: value.assessmentDesignDecisions ?? [], learningExperienceDesignDecisions: value.learningExperienceDesignDecisions ?? [], courseReviewReflections: value.courseReviewReflections ?? [], practiceTarget: value.practiceTarget, createdAt: value.createdAt ?? value.updatedAt ?? now };
}
