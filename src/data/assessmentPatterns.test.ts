import { describe, expect, it } from "vitest";
import { assessmentPatternFor } from "@/src/data/assessmentPatterns";
const assessment = { id: "a", title: "Research project", type: "summative" as const, evidence: "", linkedSloIds: [] };
describe("curated assessment patterns", () => it("creates an editable, non-disciplinary draft", () => { const pattern = assessmentPatternFor("checkpoints"); expect(pattern.draft(assessment, ["Proposal or plan"])).toContain("Proposal or plan"); expect(pattern.guidance).toContain("students"); }));
