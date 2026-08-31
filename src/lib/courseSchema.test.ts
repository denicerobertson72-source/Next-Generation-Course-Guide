import { describe, expect, it } from "vitest";
import { parseCourseRecord, validateCourseRecord } from "@/src/lib/courseSchema";

const course = { id: "course-1", title: "Ecology", slos: [{ id: "slo-1", statement: "Students will analyze evidence.", bloomLevel: "analyze", confirmed: true }], assessments: [{ id: "assessment-1", title: "Case analysis", type: "summative", evidence: "Written rationale", linkedSloIds: ["slo-1"] }], activities: [], code: "BIO 304", discipline: "Biology", level: "adv-ug", modality: "in-person", enrollment: 30, description: "", updatedAt: "2026-08-27T00:00:00.000Z" };

describe("CourseRecord validation", () => {
  it("accepts a structurally connected record", () => expect(validateCourseRecord(course).valid).toBe(true));
  it("rejects links to a missing outcome", () => expect(validateCourseRecord({ ...course, assessments: [{ ...course.assessments[0], linkedSloIds: ["missing"] }] }).errors).toContain("Assessment assessment-1 links to an unknown SLO."));
  it("upgrades earlier local records with safe defaults", () => expect(parseCourseRecord(course)).toMatchObject({ designIntent: "", aspirationalGoals: [], assignments: [], activities: [], reflections: [] }));
});
