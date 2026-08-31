import { describe, expect, it } from "vitest";
import { parseSyllabusText } from "@/src/lib/syllabusParse";

describe("conservative syllabus parsing", () => {
  it("only extracts numbered or bulleted outcomes below a clear heading", () => {
    const result = parseSyllabusText("Course Description\nAn introduction to ecology.\nStudent Learning Outcomes\n1. Analyze ecological evidence in context.\n2. Evaluate competing explanations using data.\nAssignments\nFinal project");
    expect(result.outcomes).toEqual(["Analyze ecological evidence in context.", "Evaluate competing explanations using data."]);
    expect(result.description).toBe("An introduction to ecology.");
  });
  it("does not guess outcomes from unstructured prose", () => expect(parseSyllabusText("Students will learn a great deal about ecology.").outcomes).toEqual([]));
  it("finds structured assessment bullets with provenance and percentages", () => { const found = parseSyllabusText("Assignments\n- Midterm Exam – 20%\n- Final Project – 30%\n- Research Paper").assessments; expect(found).toHaveLength(3); expect(found[0]).toMatchObject({ title: "Midterm Exam", percentage: 20, sourceSection: "Assignments", suggestedType: "exam-quiz" }); });
  it("handles basic grading-table lines and removes duplicates", () => { const found = parseSyllabusText("Grading\nAssignment                 Percent\nExams                      40%\nFinal Project              25%\nFinal Project              25%").assessments; expect(found).toEqual(expect.arrayContaining([expect.objectContaining({ title: "Exams", percentage: 40 }), expect.objectContaining({ title: "Final Project", percentage: 25 })])); expect(found).toHaveLength(2); });
  it("does not parse assessment terms from misleading prose outside a section", () => expect(parseSyllabusText("Students may discuss the project in class; no grades are assigned.").assessments).toEqual([]));
  it("tolerates malformed extraction text and headings without items", () => expect(parseSyllabusText("\u0000Evaluation:\r\n\r\nCourse description").assessments).toEqual([]));
});
