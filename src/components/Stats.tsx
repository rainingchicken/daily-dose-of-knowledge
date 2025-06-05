"use client";

import { useEffect, useState } from "react";
import type { IStats, ISubject } from "@/utils/types";

interface StatsProps {
  stats: IStats;
  score: number;
  subject: ISubject;
}

const Stats = ({ stats, score, subject }: StatsProps) => {
  const [currentScore, setCurrentScore] = useState<number>(
    stats[subject]?.score ?? 0
  );

  useEffect(() => {
    const updateStats = async () => {
      try {
        const res = await fetch("/api/stats", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ subject, score }),
        });

        const data: { stats: IStats } = await res.json();

        setCurrentScore(data.stats[subject]?.score ?? 0);
      } catch (error) {
        console.error("Failed to update stats:", error);
      }
    };

    updateStats();
  }, [score, subject]);

  return (
    <div className="card card-border bg-base-100">
      <div className="card-body">
        <h2 className="card-title text-center justify-center">Stats</h2>
        <p className="text-center justify-center">
          Score for {subject}: {currentScore}
        </p>
      </div>
    </div>
  );
};

export default Stats;
