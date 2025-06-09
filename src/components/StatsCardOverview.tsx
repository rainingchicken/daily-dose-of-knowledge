"use client";

import { useLocalStorage } from "@/utils/localStorage";
import { IStats, ISubject } from "@/utils/types";
import React from "react";

import StatsCardSimple from "./StatsCardSimple";
import {
  getOverAllMaxStreak,
  getOverallAccuracy,
  getTotalQuestionCount,
} from "@/utils/stats";

interface StatsCarddOverviewProp {
  subject: ISubject;
}

const StatsCardOverview = ({ subject }: StatsCarddOverviewProp) => {
  const [stats] = useLocalStorage<IStats>("stats", {});
  const totalQuestionCount = getTotalQuestionCount(stats);
  const mathAccuray = getOverallAccuracy(stats, "math");
  const englishAccuray = getOverallAccuracy(stats, "english");
  const overAllMaxStreak = getOverAllMaxStreak(stats);

  return (
    <div>
      <h2 className="text-primary text-center text-2xl font-bold m-5">
        Statistics
      </h2>
      <StatsCardSimple
        title="overall"
        totalQuestions={totalQuestionCount}
        accuracy={(mathAccuray + englishAccuray) / 2}
        maxStreak={overAllMaxStreak}
      />
    </div>
  );
};

export default StatsCardOverview;
