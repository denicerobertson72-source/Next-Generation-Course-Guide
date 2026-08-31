import { NextResponse } from "next/server";
import { getAiConfigurationStatus } from "@/src/lib/ai/config";

export function GET() { return NextResponse.json(getAiConfigurationStatus()); }
