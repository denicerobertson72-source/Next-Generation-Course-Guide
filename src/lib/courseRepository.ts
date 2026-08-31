import type { CourseRecord } from "@/src/types/course";
import { clearCourse, loadCourse, saveCourse } from "@/src/lib/storage";

/** Persistence boundary: replace this with a Supabase/PostgreSQL repository without changing components. */
export interface CourseRepository {
  getCurrent(): Promise<CourseRecord | null>;
  save(course: CourseRecord): Promise<void>;
  removeCurrent(): Promise<void>;
}

export const localCourseRepository: CourseRepository = {
  async getCurrent() { return loadCourse(); },
  async save(course) { saveCourse(course); },
  async removeCurrent() { clearCourse(); }
};
