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
import StatsCardComprehensive from "./StatsCardComprehensive";

const StatsCardOverview = () => {
  const [stats] = useLocalStorage<IStats>("stats", {});
  const totalQuestionCount = getTotalQuestionCount(stats);
  const mathAccuray = getOverallAccuracy(stats, "math");
  const englishAccuray = getOverallAccuracy(stats, "english");
  const overAllMaxStreak = getOverAllMaxStreak(stats);

  return (
    <div>
      <StatsCardSimple
        title="overall"
        totalQuestions={totalQuestionCount}
        accuracy={(mathAccuray + englishAccuray) / 2}
        maxStreak={overAllMaxStreak}
        isOverview={true}
      />
      <StatsCardComprehensive stats={stats} />
    </div>
  );
};

export default StatsCardOverview;
