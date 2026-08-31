import { describe, expect, it } from "vitest";
import { createBlankCourse } from "@/src/lib/course";
import { exportCourseRecord, importCourseRecord } from "@/src/lib/importExport";

describe("versioned course import and export", () => {
  it("round-trips a valid course record", () => {
    const course = createBlankCourse("course-1"); course.title = "Ecology";
    expect(importCourseRecord(exportCourseRecord(course)).course?.title).toBe("Ecology");
  });
  it("rejects an unsupported file", () => expect(importCourseRecord('{"format":"other"}').error).toContain("supported"));
});
