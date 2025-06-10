"use client";

import { useLocalStorage } from "@/utils/localStorage";
import type { IStats } from "@/utils/types";
import React from "react";
import StatsCardSimple from "./StatsCardSimple";
import {
  getOverAllMaxStreak,
  getOverallAccuracy,
  getTotalQuestionCount,
} from "@/utils/stats";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react";

const StatsCardOverview = () => {
  const [stats] = useLocalStorage<IStats>("stats", {});
  const totalQuestionCount = getTotalQuestionCount(stats);
  const mathAccuray = getOverallAccuracy(stats, "math");
  const englishAccuray = getOverallAccuracy(stats, "english");
  const overAllMaxStreak = getOverAllMaxStreak(stats);

  return (
    <>
      <StatsCardSimple
        title="overall"
        totalQuestions={totalQuestionCount}
        accuracy={(mathAccuray + englishAccuray) / 2}
        maxStreak={overAllMaxStreak}
        isOverview={true}
      />
      <Link href={"/stats"}>
        <span className="flex gap-1 btn btn-ghost">
          More details <CircleChevronRight />
        </span>
      </Link>
    </>
  );
};

export default StatsCardOverview;
