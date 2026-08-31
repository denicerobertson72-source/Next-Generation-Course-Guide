import { describe, expect, it } from "vitest";
import { buildPromptHandoff } from "@/src/lib/promptHandoff";
import { createBlankCourse } from "@/src/lib/course";
describe("Prompt Handoff", () => { it("uses relevant local context without calling an AI client", () => { const course = createBlankCourse("course"); course.title = "Ecology"; course.slos = [{ id: "s", statement: "Analyze evidence.", bloomLevel: "analyze", confirmed: true }]; const handoff = buildPromptHandoff(course, "outcomes"); expect(handoff.prompt).toContain("Analyze evidence"); expect(handoff.sources).toContain("1 learning outcomes"); }); });
