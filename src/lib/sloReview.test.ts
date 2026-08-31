import { describe, expect, it } from "vitest";
import { reviewSloStructure, suggestedSloRevision } from "@/src/lib/sloReview";

describe("deterministic SLO review", () => {
  it("identifies observable, student-centered wording", () => {
    const review = reviewSloStructure({ statement: "Students will analyze climate evidence with evidence from a disciplinary framework.", bloomLevel: "analyze" });
    expect(review.filter((item) => item.status === "meets")).toHaveLength(4);
  });
  it("flags vague wording without overwriting it", () => {
    expect(reviewSloStructure({ statement: "Understand climate change.", bloomLevel: "understand" }).some((item) => item.status === "review")).toBe(true);
    expect(suggestedSloRevision("Understand climate change.")).not.toBe("Understand climate change.");
  });
});
