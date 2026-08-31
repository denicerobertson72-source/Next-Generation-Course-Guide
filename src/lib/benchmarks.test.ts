import { describe, expect, it } from "vitest";
import { ACTIVITY_BENCHMARKS, headlinePicksFor, runAllBenchmarks } from "@/src/lib/benchmarks";

describe("Activity Builder migration benchmarks", () => {
  it("ports all 12 calibrated legacy scenarios", () => {
    expect(ACTIVITY_BENCHMARKS).toHaveLength(12);
  });

  it("keeps every legacy scenario in the passing calibration band", () => {
    for (const result of runAllBenchmarks()) {
      expect(result.status, result.benchmark.name).toBe("pass");
      expect(result.unexpectedHigh, result.benchmark.name).toEqual([]);
    }
  });

  it("keeps three distinct faculty-facing headline picks", () => {
    const picks = headlinePicksFor(ACTIVITY_BENCHMARKS[0]);
    expect(picks).toHaveLength(3);
    expect(new Set(picks.map((pick) => pick.activity.id)).size).toBe(3);
  });
});
