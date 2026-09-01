import { describe, expect, it } from "vitest";
import { courseReviewCategories } from "@/src/data/courseReviewLibrary";
import { createBlankCourse } from "@/src/lib/course";
import { reviewEvidence } from "@/src/lib/courseReview";

describe("course review intelligence", () => {
  it("preserves the source categories and routes priority review into existing tools", () => {
    expect(courseReviewCategories.map((category) => category.title)).toEqual(expect.arrayContaining(["Course Objectives & Alignment", "Activities & Learning Experiences", "Grading & Assessment Design", "AI-Aware Assessment Design", "Accessibility"]));
    expect(courseReviewCategories.find((category) => category.id === "objectives-alignment")?.criteria[1].actions?.map((action) => action.route)).toContain("alignment");
  });
  it("describes missing connections without treating them as a quality score", () => {
    const course = createBlankCourse("course"); course.slos = [{ id: "slo", statement: "Analyze evidence.", bloomLevel: "analyze", confirmed: true }];
    const criterion = courseReviewCategories.find((category) => category.id === "objectives-alignment")!.criteria[1];
    expect(reviewEvidence(course, criterion)).toContain("0 with assessment evidence");
    expect(reviewEvidence(course, criterion)).not.toContain("score");
  });
});
