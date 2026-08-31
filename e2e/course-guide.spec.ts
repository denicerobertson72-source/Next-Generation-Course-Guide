import { expect, test } from "@playwright/test";

test("syllabus upload presents structured findings and local AI handoff", async ({ page }) => {
  await page.route("**/api/ai/**", (route) => route.abort());
  await page.goto("/");
  await page.getByRole("button", { name: "Upload a syllabus" }).click();
  const file = page.locator('input[type="file"]');
  await file.setInputFiles({ name: "syllabus.txt", mimeType: "text/plain", buffer: Buffer.from("Student Learning Outcomes\n1. Analyze ecological evidence.\nAssignments\n- Midterm Exam – 20%\n- Final Project – 30%") });
  await expect(page.getByText("Review what we found")).toBeVisible();
  await expect(page.getByLabel("Proposed outcome 1")).toHaveValue("Analyze ecological evidence.");
  await page.getByRole("button", { name: "Accept" }).first().click();
  await page.getByRole("button", { name: "Course dashboard" }).click();
  await page.getByText("Continue with an AI Assistant").click();
  await expect(page.getByLabel("Editable prompt")).toBeEditable();
});

test("assignment entry provides standard review, TiLT, and prompt handoff", async ({ page }) => {
  await page.goto("/"); await page.getByRole("button", { name: "Upload an assignment" }).click();
  await page.getByLabel("Or paste assignment text").fill("Write and submit a case analysis. Criteria: use the rubric.");
  await page.getByLabel("Assignment title").fill("Case analysis"); await page.getByRole("button", { name: "Create assignment from this text" }).click();
  await page.getByRole("button", { name: "Run Standard Review — No AI" }).click();
  await expect(page.getByRole("heading", { name: "Criteria for Success" })).toBeVisible();
  await page.getByText("Continue with an AI Assistant").click(); await expect(page.getByLabel("Editable prompt")).toBeEditable();
});

test("keyboard navigation reaches primary landing workflow", async ({ page }) => { await page.goto("/"); await page.keyboard.press("Tab"); await page.keyboard.press("Enter"); await expect(page.getByText("Course context").first()).toBeVisible(); });

test("unsupported syllabus upload reports a recoverable failure", async ({ page }) => { await page.goto("/"); await page.getByRole("button", { name: "Upload a syllabus" }).click(); await page.locator('input[type="file"]').setInputFiles({ name: "syllabus.jpg", mimeType: "image/jpeg", buffer: Buffer.from("not a document") }); await expect(page.getByText("Unsupported file type").first()).toBeVisible(); });

test("saved course persists and detailed course-design views remain reachable", async ({ page }) => {
  await page.goto("/"); await page.getByRole("button", { name: "Start without a document" }).click();
  await page.getByLabel("Course title").fill("Ecology"); await page.reload();
  await expect(page.getByRole("button", { name: "Continue a course" })).toBeVisible(); await page.getByRole("button", { name: "Continue a course" }).click();
  await page.getByRole("button", { name: "Outcomes", exact: true }).click(); await expect(page.getByText("Build and review outcomes")).toBeVisible();
  await page.getByRole("button", { name: "Assessments", exact: true }).click(); await expect(page.getByText("How will students demonstrate their learning?")).toBeVisible();
  await page.getByRole("button", { name: "Learning experiences", exact: true }).click(); await expect(page.getByText("What practice will prepare students for the evidence?")).toBeVisible();
  await page.getByRole("button", { name: "Alignment", exact: true }).click(); await expect(page.getByText("Outcome → Practice → Evidence")).toBeVisible();
});

test("outcome design partner saves a faculty-approved revision", async ({ page }) => {
  await page.goto("/"); await page.getByRole("button", { name: "Start without a document" }).click();
  await page.getByRole("button", { name: "Next: outcomes →" }).click();
  await page.getByLabel("New outcome").fill("Students will understand ecosystems."); await page.getByRole("button", { name: "Add outcome" }).click();
  await page.getByRole("button", { name: "Explore revisions" }).click(); await page.getByRole("button", { name: "Make it measurable" }).click();
  await page.getByLabel("Editable revision").fill("Students will explain ecosystem relationships using evidence."); await page.getByRole("button", { name: "Use this revision" }).click();
  await expect(page.getByText("Students will explain ecosystem relationships using evidence.")).toBeVisible();
  await page.getByRole("button", { name: "Design story", exact: true }).click();
  await expect(page.getByText("1 saved design decision")).toBeVisible();
});

test("assessment design partner saves an editable curated decision", async ({ page }) => {
  await page.goto("/"); await page.getByRole("button", { name: "Start without a document" }).click();
  await page.getByRole("button", { name: "Assessments", exact: true }).click();
  await page.getByPlaceholder("Assessment title").fill("Research project"); await page.getByRole("button", { name: "Add assessment" }).click();
  await page.getByRole("button", { name: "Explore this assessment" }).click(); await page.getByRole("button", { name: "Add formative checkpoints" }).click();
  await page.getByLabel("Editable curated draft design").fill("1. Proposal\n2. Draft\n3. Feedback\n4. Final submission"); await page.getByRole("button", { name: "Save design decision" }).click();
  await expect(page.getByText("Research project")).toBeVisible();
});

test("learning experience partner offers and saves a quick practice design", async ({ page }) => {
  await page.goto("/"); await page.getByRole("button", { name: "Start without a document" }).click();
  await page.getByRole("button", { name: "Learning experiences", exact: true }).click();
  await expect(page.getByText("What students need to practice")).toBeVisible();
  await page.getByRole("button", { name: "Explore" }).first().click();
  await page.getByRole("button", { name: "Use this design" }).click();
  await expect(page.getByText("Activity 1")).toBeVisible();
});
