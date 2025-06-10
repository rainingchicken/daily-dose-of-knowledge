import {
  BookOpen,
  ChartLine,
  CircleCheckBig,
  Flame,
  Timer,
} from "lucide-react";
import React from "react";

interface StatsCardSimpleProps {
  title: string;
  totalQuestions: number;
  accuracy: number;
  maxStreak: number;
  isOverview?: boolean;
  currentStreak?: number;
  totalTime?: number;
}

const StatsCardSimple = ({
  title,
  totalQuestions,
  accuracy,
  maxStreak,
  isOverview = false,
  currentStreak,
  totalTime,
}: StatsCardSimpleProps) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body ">
        <h2 className={`card-title text-primary justify-center`}>
          {title.toUpperCase()} STATISTICS
        </h2>
        <div className={`stats shadow ${isOverview ? "" : " stats-vertical"}`}>
          <div className="stat">
            <div className="stat-figure text-primary">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div className="stat-title">Total Questions</div>
            <div className="stat-value text-primary">{totalQuestions}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <CircleCheckBig className="h-8 w-8 text-secondary" />
            </div>
            <div className="stat-title">Accuracy</div>
            <div className="stat-value text-secondary">
              {Math.round(accuracy)}%
            </div>
          </div>

          {!isOverview && (
            <>
              <div className="stat">
                <div className="stat-figure text-info">
                  <Timer className="h-8 w-8 text-info" />
                </div>
                <div className="stat-title">Time</div>
                <div className="stat-value text-info">{totalTime}</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-warning">
                  <ChartLine className="h-8 w-8 text-warning" />
                </div>
                <div className="stat-title">Current Streak</div>
                <div className="stat-value text-warning">{currentStreak}</div>
              </div>
            </>
          )}

          <div className="stat">
            <div className="stat-figure text-error">
              <Flame className="h-8 w-8 text-error" />
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
