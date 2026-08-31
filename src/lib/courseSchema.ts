import type { CourseRecord } from "@/src/types/course";
import { normalizeCourseRecord } from "@/src/lib/course";

export type CourseValidation = { valid: boolean; errors: string[] };

/** Lightweight runtime boundary validation for local-storage/demo records. */
export function validateCourseRecord(value: unknown): CourseValidation {
  const errors: string[] = [];
  if (!value || typeof value !== "object") return { valid: false, errors: ["Course record must be an object."] };
  const course = value as Partial<CourseRecord>;
  if (typeof course.id !== "string" || !course.id) errors.push("Course id is required.");
  if (typeof course.title !== "string") errors.push("Course title must be text.");
  if (!Array.isArray(course.slos)) errors.push("SLOs must be an array.");
  if (!Array.isArray(course.assessments)) errors.push("Assessments must be an array.");
  if (!Array.isArray(course.activities)) errors.push("Activities must be an array.");
  const sloIds = new Set((course.slos ?? []).map((slo) => slo.id));
  (course.assessments ?? []).forEach((assessment) => assessment.linkedSloIds?.forEach((id) => { if (!sloIds.has(id)) errors.push(`Assessment ${assessment.id} links to an unknown SLO.`); }));
  return { valid: errors.length === 0, errors };
}

export function parseCourseRecord(value: unknown): CourseRecord | null {
  return validateCourseRecord(value).valid ? normalizeCourseRecord(value as CourseRecord) : null;
}
