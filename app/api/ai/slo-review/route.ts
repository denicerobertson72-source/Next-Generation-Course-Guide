import { NextResponse } from "next/server";
import { requestSloReview } from "@/src/lib/ai/client";
import { sloPrompt, type SloReviewContext } from "@/src/lib/ai/slo";

const levels = ["remember", "understand", "apply", "analyze", "evaluate", "create"] as const;
const clip = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  try {
    const body = await request.json() as { statement?: string; bloomLevel?: (typeof levels)[number]; courseContext?: Partial<SloReviewContext> };
    const statement = clip(body.statement, 2_000);
    if (!statement || !body.bloomLevel || !levels.includes(body.bloomLevel)) return NextResponse.json({ error: "A student learning outcome (up to 2,000 characters) and Bloom level are required." }, { status: 400 });
    if ((body.statement?.length ?? 0) > 2_000) return NextResponse.json({ error: "Please shorten the SLO to 2,000 characters before requesting a review." }, { status: 400 });
    const raw = body.courseContext ?? {};
    const context: SloReviewContext = { title: clip(raw.title, 200), discipline: clip(raw.discipline, 200), level: clip(raw.level, 80), modality: clip(raw.modality, 80), description: clip(raw.description, 2_000), goals: Array.isArray(raw.goals) ? raw.goals.map((goal) => clip(goal, 300)).filter(Boolean).slice(0, 8) : [], materialExcerpts: Array.isArray(raw.materialExcerpts) ? raw.materialExcerpts.map((item) => ({ filename: clip(item?.filename, 240), text: clip(item?.text, 4_000) })).filter((item) => item.filename && item.text).slice(0, 3) : [] };
    const review = await requestSloReview(sloPrompt({ statement, bloomLevel: body.bloomLevel }, context));
    return NextResponse.json(review);
  } catch (error) {
    const message = error instanceof Error ? error.message : "AI review could not be completed.";
    const code = /not configured|unavailable/i.test(message) ? 503 : /rate-limit/i.test(message) ? 429 : 502;
    return NextResponse.json({ error: message }, { status: code });
  }
}
