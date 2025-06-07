"use client";

import { useEffect, useState } from "react";
import type { IStats, ISubject } from "@/utils/types";
import { useLocalStorage } from "@/utils/localStorage";

interface StatsProps {
  currentStats?: IStats;
  score: number;
  subject: ISubject;
}

const Stats = ({ score, subject }: StatsProps) => {
  const [stats, setStats] = useLocalStorage<IStats>("stats", {});
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    setStats((prevStats) => ({
      ...prevStats,
      [subject]: {
        score: (prevStats[subject]?.score || 0) + score,
      },
    }));
  }, [subject, score, setStats]);

  if (!hasMounted) return null;

  return (
    <div className="card card-border bg-base-100">
      <div className="card-body">
        <h2 className="card-title text-center justify-center">Stats</h2>
        <p className="text-center justify-center">
          {stats[subject]?.score ?? 0}
        </p>
      </div>
    </div>
  );
};

export default Stats;
