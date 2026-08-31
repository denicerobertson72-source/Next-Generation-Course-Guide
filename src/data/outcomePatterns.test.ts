import { describe, expect, it } from "vitest";
import { patternFor } from "@/src/data/outcomePatterns";
describe("curated outcome patterns", () => it("offers editable guidance rather than an automatic replacement", () => { const pattern = patternFor("measurable"); expect(pattern.draft("Students will understand ecosystems.", "understand")).toContain("Students will"); expect(pattern.guidance).toContain("observable"); }));
