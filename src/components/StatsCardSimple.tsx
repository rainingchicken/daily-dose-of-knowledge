import React from "react";
import Book from "./icons/Book";
import Check from "./icons/Check";
import Fire from "./icons/Fire";

interface StatsCardSimpleProps {
  title: string;
  totalQuestions: number;
  accuracy: number;
  maxStreak: number;
}

const StatsCardSimple = ({
  title,
  totalQuestions,
  accuracy,
  maxStreak,
}: StatsCardSimpleProps) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body ">
        <h2 className={`card-title text-primary`}>
          {title.toUpperCase()} STATS
        </h2>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <Book className="h-8 w-8 text-primary" />
            </div>
            <div className="stat-title">Total Questions</div>
            <div className="stat-value text-primary">{totalQuestions}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <Check className="h-8 w-8 text-secondary" />
            </div>
            <div className="stat-title">Accuracy</div>
            <div className="stat-value text-secondary">{accuracy}%</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-error">
              <Fire className="h-8 w-8 text-error" />
            </div>
            <div className="stat-title">Streak Record</div>
            <div className="stat-value text-error">{maxStreak}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCardSimple;
