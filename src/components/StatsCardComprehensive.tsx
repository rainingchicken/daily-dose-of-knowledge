"use client";

import type { IStats, ISubject } from "@/utils/types";
import React from "react";
import Table from "./Table";
import { useLocalStorage } from "@/utils/localStorage";
import { getBestAndWorst } from "@/utils/stats";
import { Crown, Frown } from "lucide-react";

interface StatsCardComprehensiveProp {
  subject: ISubject;
}

const StatsCardComprehensive = ({ subject }: StatsCardComprehensiveProp) => {
  const [stats] = useLocalStorage<IStats>("stats", {});

  if (Object.keys(stats).length === 0)
    return <h2 className="text-center">No Data</h2>;

  const bestWorst = getBestAndWorst(stats, subject);
  return (
    <>
      <div className="stats bg-background/20 flex justify-between text-center mb-5">
        <div className="stat">
          <div className="stat-title">
            <h2 className="flex justify-center gap-2 pb-2">
              Best Category <Crown />
            </h2>
          </div>
          <div className="stat-value whitespace-normal ">
            <h3 className="text-2xl text-success">
              {bestWorst.categoryResult.best}
            </h3>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">
            <h2 className="flex justify-center gap-2 pb-2">
              Worst Category <Frown />
            </h2>
          </div>
          <div className="stat-value whitespace-normal ">
            <h3 className="text-2xl text-error">
              {bestWorst.categoryResult.worst}
            </h3>
          </div>
        </div>
      </div>

      <Table stats={stats} subject={subject} />
    </>
  );
};

export default StatsCardComprehensive;
