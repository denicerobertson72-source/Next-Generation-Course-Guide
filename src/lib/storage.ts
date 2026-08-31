import type { CourseRecord } from "@/src/types/course";
import { parseCourseRecord } from "@/src/lib/courseSchema";

const STORAGE_KEY = "ngcg-course-v0.1";

export function saveCourse(course: CourseRecord) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(course));
}

export function loadCourse(): CourseRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return parseCourseRecord(parsed);
  } catch {
    return null;
  }
}

export function clearCourse() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
