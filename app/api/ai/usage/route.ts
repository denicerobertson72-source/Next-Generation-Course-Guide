import { NextResponse } from "next/server";
import { aiFeatureAvailability, getAiFeatureConfig } from "@/src/lib/ai/featureConfig";
import { estimateCost } from "@/src/lib/ai/pricing";
import { checkAiLimits } from "@/src/lib/ai/limits";

export async function GET() {
  const availability = aiFeatureAvailability("sloReview"); const estimate = estimateCost("A typical SLO review with relevant course context.", "routine", true); const limits = checkAiLimits(estimate);
  return NextResponse.json({ availability, estimate, limits: { today: limits.today, todayLimit: limits.todayLimit, month: limits.month, monthLimit: limits.monthLimit }, prototype: true, config: { aiEnabled: getAiFeatureConfig().aiEnabled } });
}
