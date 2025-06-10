"use client";

import { useLocalStorage } from "@/utils/localStorage";
import type { IStats } from "@/utils/types";
import React, { useState } from "react";

import StatsCardSimple from "./StatsCardSimple";
import {
  getOverAllMaxStreak,
  getOverallAccuracy,
  getTotalQuestionCount,
} from "@/utils/stats";
import StatsCardComprehensive from "./StatsCardComprehensive";
import { ChevronsDown, ChevronsUp } from "lucide-react";

const StatsCardOverview = () => {
  const [hideMoreDetails, setHideMoreDetails] = useState(false);
  const [stats] = useLocalStorage<IStats>("stats", {});
  const totalQuestionCount = getTotalQuestionCount(stats);
  const mathAccuray = getOverallAccuracy(stats, "math");
  const englishAccuray = getOverallAccuracy(stats, "english");
  const overAllMaxStreak = getOverAllMaxStreak(stats);

  const handleToggle = () => {
    setHideMoreDetails(!hideMoreDetails);
  };

  return (
    <div>
      <StatsCardSimple
        title="overall"
        totalQuestions={totalQuestionCount}
        accuracy={(mathAccuray + englishAccuray) / 2}
        maxStreak={overAllMaxStreak}
        isOverview={true}
      />
      {!hideMoreDetails && <StatsCardComprehensive stats={stats} />}
      <button className="btn btn-ghost btn-block" onClick={handleToggle}>
        {hideMoreDetails ? (
          <span className="flex text-primary">
            Show more Details <ChevronsDown />
          </span>
        ) : (
          <span className="flex text-primary">
            Hide details <ChevronsUp />
          </span>
        )}
      </button>
    </div>
  );
};

export default StatsCardOverview;
