import { parseCourseRecord } from "@/src/lib/courseSchema";
import type { CourseRecord } from "@/src/types/course";

export type ImportResult = { course: CourseRecord | null; error?: string };

export function exportCourseRecord(course: CourseRecord) {
  return JSON.stringify({ format: "ngcg-course-export", schemaVersion: 1, exportedAt: new Date().toISOString(), course }, null, 2);
}

export function importCourseRecord(raw: string): ImportResult {
  try {
    const parsed = JSON.parse(raw) as { format?: string; schemaVersion?: number; course?: unknown };
    if (parsed.format !== "ngcg-course-export" || parsed.schemaVersion !== 1) return { course: null, error: "This is not a supported Course Guide export." };
    const course = parseCourseRecord(parsed.course);
    return course ? { course } : { course: null, error: "The course record is missing required structure or contains invalid links." };
  } catch { return { course: null, error: "The selected file is not valid JSON." }; }
}

export function downloadCourseJson(course: CourseRecord) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([exportCourseRecord(course)], { type: "application/json" }));
  link.download = `${(course.code || course.title || "course").replaceAll(" ", "-").toLowerCase()}-course-guide.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}
