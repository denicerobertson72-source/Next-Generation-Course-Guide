import { describe, expect, it } from "vitest";
import { extractFacultyMaterial, supportedMaterialType } from "@/src/lib/materials/extract";

const fakeFile = (name: string, text: string) => { const bytes = new TextEncoder().encode(text); const copy = new Uint8Array(bytes); return { name, type: "text/plain", size: copy.byteLength, arrayBuffer: async () => copy.buffer as ArrayBuffer }; };

describe("faculty material extraction", () => {
  it("extracts readable text from a supported plain-text material", async () => {
    const result = await extractFacultyMaterial(fakeFile("syllabus.txt", "Course description\nStudents will analyze evidence."));
    expect(result.status).toBe("extracted"); expect(result.extractedText).toContain("Students will analyze evidence.");
  });
  it("reports unsupported file types without retaining text", async () => {
    const result = await extractFacultyMaterial(fakeFile("grades.xlsx", "private"));
    expect(result.status).toBe("failed"); expect(result.extractedText).toBe("");
  });
  it("advertises each prototype-supported upload type", () => expect(["docx", "pdf", "txt", "md"].every((extension) => supportedMaterialType(`file.${extension}`))).toBe(true));
});
