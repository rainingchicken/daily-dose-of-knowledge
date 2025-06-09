"use client";

import { useEffect, useRef, useState } from "react";
import type { IStats, ISubject } from "@/utils/types";
import { useLocalStorage } from "@/utils/localStorage";
import { getOverallAccuracy } from "@/utils/stats";

interface StatsProps {
  score: number;
  subject: ISubject;
  category: string;
  difficulty: string;
  time: number;
}

const StatsCard = ({
  score,
  subject,
  category,
  difficulty,
  time,
}: StatsProps) => {
  const [stats, setStats] = useLocalStorage<IStats>("stats", {});
  const [hasMounted, setHasMounted] = useState(false);
  const hasUpdatedStats = useRef(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasUpdatedStats.current) return;
    hasUpdatedStats.current = true;

    setStats((prevStats) => {
      const prevSubject = prevStats[subject] || {
        categoryStats: {},
        difficultyStats: {},
        played: false,
        currentStreakCount: 0,
        maxStreakCount: 0,
      };

      const prevCategory = prevSubject.categoryStats[category] || {
        score: 0,
        time: 0,
        questionCount: 0,
      };

      const prevDifficulty = prevSubject.difficultyStats[difficulty] || {
        score: 0,
        time: 0,
        questionCount: 0,
      };

      const newCurrentStreak =
        score === 1 ? prevSubject.currentStreakCount + 1 : 0;

      return {
        ...prevStats,
        [subject]: {
          categoryStats: {
            ...prevSubject.categoryStats,
            [category]: {
              score: prevCategory.score + score,
              time: prevCategory.time + time,
              questionCount: prevCategory.questionCount + 1,
            },
          },
          difficultyStats: {
            ...prevSubject.difficultyStats,
            [difficulty]: {
              score: prevDifficulty.score + score,
              time: prevDifficulty.time + time,
              questionCount: prevDifficulty.questionCount + 1,
            },
          },
          played: true,
          currentStreakCount: newCurrentStreak,
          maxStreakCount: Math.max(
            prevSubject.maxStreakCount,
            newCurrentStreak
          ),
        },
      };
    });
  }, [subject, category, difficulty, score, time, setStats]);

  const overallAccuracy = getOverallAccuracy(stats, subject);

  if (!hasMounted) return null;
  return (
    <div className="card card-border bg-base-100">
      <div className="card-body">
        <h2 className="card-title text-center justify-center">Stats</h2>
        <h3 className="text-center justify-center">
          Accuracy: {Math.round(overallAccuracy)}%
        </h3>
        <p className="text-center justify-center">
          Total Time: {stats[subject].categoryStats[category].time}
        </p>
        <p className="text-center justify-center">
          Current Streak: {stats[subject].currentStreakCount}
        </p>
        <p className="text-center justify-center">
          Highest Streak: {stats[subject].maxStreakCount}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
