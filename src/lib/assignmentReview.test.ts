import { describe, expect, it } from "vitest";
import { createTransparentVersion, standardAssignmentReview, tiltFromAssignment } from "@/src/lib/assignmentReview";
import type { Assignment } from "@/src/types/course";

const assignment: Assignment = { id: "assignment-1", title: "Case analysis", originalText: "Purpose: analyze evidence.\n1. Write a case analysis.\n2. Submit your response.\nCriteria: use the rubric.", workingText: "Purpose: analyze evidence.\n1. Write a case analysis.\n2. Submit your response.\nCriteria: use the rubric.", revisedText: "", linkedSloIds: ["slo-1"], linkedAssessmentIds: [], linkedActivityIds: [], tilt: { level: "standard", purpose: ["Practice evidence analysis."], task: ["Write and submit an analysis."], criteria: ["Use the rubric."] }, reviewStatus: "not-reviewed" };

describe("deterministic assignment review", () => {
  it("detects visible Purpose, Task, and Criteria language", () => expect(tiltFromAssignment(assignment.originalText)).toMatchObject({ purpose: [expect.any(String)], task: [expect.any(String)], criteria: [expect.any(String)] }));
  it("preserves original wording while creating transparent placeholders only where needed", () => { const result = createTransparentVersion(assignment); expect(result).toContain(assignment.originalText); expect(result).toContain("## Purpose"); });
  it("reports missing links as faculty decisions, not failures", () => expect(standardAssignmentReview({ ...assignment, linkedSloIds: [] }, []).findings.some((item) => item.status === "faculty-decision-needed")).toBe(true));
});
