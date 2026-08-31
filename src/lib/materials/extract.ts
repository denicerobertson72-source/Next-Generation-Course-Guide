import "server-only";
import mammoth from "mammoth";
import pdfParse from "pdf-parse/lib/pdf-parse.js";
import type { FacultyMaterial } from "@/src/types/course";

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_EXTRACTED_CHARS = 100_000;
const SUPPORTED_EXTENSIONS = ["docx", "pdf", "txt", "md"] as const;

export type ExtractedMaterial = Omit<FacultyMaterial, "id" | "scope" | "uploadedAt">;

export function supportedMaterialType(filename: string) { return SUPPORTED_EXTENSIONS.includes(filename.toLowerCase().split(".").pop() as typeof SUPPORTED_EXTENSIONS[number]); }

export async function extractFacultyMaterial(file: { name: string; type: string; size: number; arrayBuffer: () => Promise<ArrayBuffer> }): Promise<ExtractedMaterial> {
  if (!supportedMaterialType(file.name)) return failed(file, "Unsupported file type. Upload a .docx, .pdf, .txt, or .md file.");
  if (file.size === 0) return failed(file, "The uploaded file is empty.");
  if (file.size > MAX_FILE_BYTES) return failed(file, "The prototype accepts files up to 10 MB.");
  try {
    const buffer = Buffer.from(await file.arrayBuffer()); const extension = file.name.toLowerCase().split(".").pop();
    const raw = extension === "docx" ? (await mammoth.extractRawText({ buffer })).value : extension === "pdf" ? (await pdfParse(buffer)).text : buffer.toString("utf8");
    const text = raw.replace(/\u0000/g, "").replace(/\r\n/g, "\n").trim();
    if (!text) return failed(file, "No readable text was found in this file. It may be image-only, encrypted, or malformed.");
    const truncated = text.length > MAX_EXTRACTED_CHARS;
    const extractedText = truncated ? text.slice(0, MAX_EXTRACTED_CHARS) : text;
    return { filename: file.name, mimeType: file.type || `application/${extension}`, status: "extracted", extractedText, characterCount: extractedText.length, message: truncated ? "Text extracted; the prototype retained the first 100,000 characters only." : "Text extracted in this browser session. The original file was not retained.", };
  } catch { return failed(file, "Text extraction failed. Try a text-based PDF/DOCX or paste the relevant text."); }
}

function failed(file: { name: string; type: string }, message: string): ExtractedMaterial { return { filename: file.name, mimeType: file.type || "unknown", status: "failed", extractedText: "", characterCount: 0, message }; }
