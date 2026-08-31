import { describe, expect, it } from "vitest";
import { goalsFromEditor, normalizeGoals } from "@/src/lib/aspirationalGoals";

describe("aspirational-goal editing", () => {
  it("preserves spaces while a faculty member is typing", () => expect(goalsFromEditor("Students will work together ")).toEqual(["Students will work together "]));
  it("cleans up only at the save boundary", () => expect(normalizeGoals("  First goal  \n \nSecond goal ")).toEqual(["First goal", "Second goal"]));
});
