import { NextResponse } from "next/server";
import { extractFacultyMaterial } from "@/src/lib/materials/extract";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const form = await request.formData(); const file = form.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "Choose one file to extract." }, { status: 400 });
  const material = await extractFacultyMaterial(file);
  return NextResponse.json({ material }, { status: material.status === "extracted" ? 200 : 422 });
}
