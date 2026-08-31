import { describe, expect, it } from "vitest";
import { activities } from "@/src/data/activities";
import { assessTiltCompleteness, buildTilt } from "@/src/lib/tilt";

describe("deterministic TiLT scaffold", () => {
  it("creates Purpose, Task, and Criteria from a selected activity", () => {
    const tilt = buildTilt(activities[0], { outcome: "Students will analyze evidence.", action: "interpret-evidence", time: "t30", topic: "water quality" });
    expect(tilt.purpose.length).toBeGreaterThan(0); expect(tilt.task.length).toBeGreaterThan(1); expect(tilt.criteria.length).toBeGreaterThan(0);
  });
  it("reports missing sections as prompts to review", () => expect(assessTiltCompleteness({ level: "quick", purpose: [], task: [], criteria: [] }).every((check) => check.status === "Needs information")).toBe(true));
});
