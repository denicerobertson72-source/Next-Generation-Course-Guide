import { describe, expect, it } from "vitest";
import { findAlignmentIssues } from "@/src/lib/alignment";
import type { CourseRecord } from "@/src/types/course";

const base: CourseRecord = { id: "course-1", title: "Ecology", code: "BIO 304", discipline: "Biology", level: "adv-ug", modality: "in-person", enrollment: 30, description: "", designIntent: "", aspirationalGoals: [], updatedAt: "2026-08-27T00:00:00.000Z", createdAt: "2026-08-27T00:00:00.000Z", slos: [{ id: "slo-1", statement: "Students will analyze evidence.", bloomLevel: "analyze", confirmed: true }], assessments: [], activities: [], assignments: [], aiDecisions: [], reflections: [], sources: [], materials: [] };

describe("deterministic alignment checks", () => {
  it("flags an outcome with neither evidence nor practice", () => expect(findAlignmentIssues(base).map((issue) => issue.code)).toEqual(["outcome-without-assessment", "outcome-without-practice"]));
  it("does not flag a complete three-way relationship", () => expect(findAlignmentIssues({ ...base, assessments: [{ id: "assessment-1", title: "Case analysis", type: "summative", evidence: "Rationale", linkedSloIds: ["slo-1"] }], activities: [{ id: "activity-1", activityId: "case-study", activityName: "Case Study", linkedSloIds: ["slo-1"], linkedAssessmentIds: ["assessment-1"], recommendationPct: 90, recommendationRole: "Best overall fit", rationale: [] }] })).toEqual([]));
  it("flags a summative assessment without an explicitly linked preparatory activity", () => expect(findAlignmentIssues({ ...base, assessments: [{ id: "assessment-1", title: "Case analysis", type: "summative", evidence: "Rationale", linkedSloIds: ["slo-1"] }] }).map((issue) => issue.code)).toContain("assessment-without-preparation"));
  it("conservatively suggests review for a large cognitive-demand mismatch", () => expect(findAlignmentIssues({ ...base, assessments: [{ id: "assessment-1", title: "Quiz", type: "formative", evidence: "Recall", linkedSloIds: ["slo-1"], cognitiveLevel: "remember" }] }).find((issue) => issue.code === "cognitive-demand-review")?.severity).toBe("review-suggested"));
});
