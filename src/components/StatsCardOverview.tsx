"use client";

import { useLocalStorage } from "@/utils/localStorage";
import type { IStats, ISubject } from "@/utils/types";
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
  const totalQuestionCount = () => {
    let totalQuestionCount = 0;
    for (const subject in stats) {
      totalQuestionCount += getTotalQuestionCount(stats, subject as ISubject);
    }
    return totalQuestionCount;
  };

  const overallAccuracy = () => {
    let overallAccuracy = 0;
    for (const subject in stats) {
      overallAccuracy += getOverallAccuracy(stats, subject as ISubject);
    }

    return overallAccuracy / Object.keys(stats).length;
  };

  const overAllMaxStreak = getOverAllMaxStreak(stats);

  return (
    <>
      <StatsCardSimple
        title="overall"
        totalQuestions={totalQuestionCount()}
        accuracy={overallAccuracy()}
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
