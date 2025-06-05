import { IStats, ISubject } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { subject, score }: { subject: ISubject; score: number } =
    await req.json();

  const cookie = req.cookies.get("STATS")?.value ?? "";

  let stats: IStats;

  try {
    stats = JSON.parse(cookie) as IStats;
  } catch {
    // If cookie is missing or invalid, initialize with default
    stats = { [subject]: { score: 0 } };
  }

  const current = stats[subject]?.score ?? 0;

  stats[subject] = { score: current + score };

  const res = NextResponse.json({ stats });

  res.cookies.set("STATS", JSON.stringify(stats), {
    path: "/",
    httpOnly: false,
    sameSite: "strict",
  });

  return res;
}
