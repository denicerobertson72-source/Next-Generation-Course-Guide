import { describe, expect, it } from "vitest";
import { createBlankCourse } from "@/src/lib/course";
import { inferPracticeNeed, recommendPractice } from "@/src/lib/learningExperience";
describe("learning experience recommendations", () => { it("uses outcome and assessment context without external AI", () => { const course = createBlankCourse("c"); const slo = { id: "s", statement: "Students will evaluate evidence.", bloomLevel: "evaluate" as const, confirmed: true }; const assessment = { id: "a", title: "Case analysis", type: "summative" as const, evidence: "", linkedSloIds: ["s"] }; expect(inferPracticeNeed(slo, assessment).primary).toBe("evaluate"); expect(recommendPractice(course, slo, assessment)[0].reasons.join(" ")).toContain("Case analysis"); }); });
