import { describe, expect, it } from "vitest";
import { activityById } from "@/src/data/activities";
import { ENHANCED_ACTIVITY_IDS } from "@/src/data/activityEnhancements";
import { generationQualityFlags } from "@/src/lib/generationQuality";
import { buildActivityPackage } from "@/src/lib/smartDefaults";

describe("legacy activity-specific enhancement migration", () => {
  it("ports all 25 high-priority legacy enhancement records", () => {
    expect(ENHANCED_ACTIVITY_IDS).toHaveLength(25);
    expect(ENHANCED_ACTIVITY_IDS.every((id) => Boolean(activityById[id]))).toBe(true);
  });
  it("uses enhanced criteria and facilitation for One-Minute Paper", () => {
    const activity = activityById["one-minute-paper"]; const pkg = buildActivityPackage(activity, { goal: { actionPrimary: "summarize" }, context: { time: "t15" } }, { topic: "climate systems", mode: "quick" });
    expect(pkg.tilt.criteria.join(" ")).toContain("Answer both prompts");
    expect(pkg.instructorNotes.join(" ")).toContain("final 3–4 minutes");
    expect(generationQualityFlags(activity, pkg, "climate systems").find((flag) => flag.code === "template-specificity")?.status).toBe("meets");
  });
});
