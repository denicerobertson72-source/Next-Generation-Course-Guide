import { describe, expect, it } from "vitest";
import { activities } from "@/src/data/activities";
import { buildActivityPackage, deriveActivityDefaults } from "@/src/lib/smartDefaults";

const answers = { goal: { actionPrimary: "retrieve", stage: "during-lecture" }, context: { format: "in-person", time: "t5", grouping: "flexible", priorities: ["low-grading"] } };

describe("Activity Builder smart defaults", () => {
  it("does not require faculty to choose short-activity grading or grouping", () => {
    const defaults = deriveActivityDefaults(activities[0], answers);
    expect(defaults.grading).toBe("ungraded");
    expect(defaults.grouping).toBe("individual");
    expect(defaults.assumptions.length).toBeGreaterThan(0);
  });
  it("builds a package with visible assumptions", () => {
    const pkg = buildActivityPackage(activities[0], answers, { topic: "water quality", mode: "quick" });
    expect(pkg.tilt.task.join(" ")).toContain("water quality");
    expect(pkg.assumptions.length).toBeGreaterThan(0);
  });
});
