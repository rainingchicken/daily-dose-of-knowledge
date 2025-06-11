"use client";

import type { IStats, ISubject } from "@/utils/types";
import React from "react";
import Table from "./Table";
import { useLocalStorage } from "@/utils/localStorage";
import { getBestAndWorst } from "@/utils/stats";

interface StatsCardComprehensiveProp {
  subject: ISubject;
}

const StatsCardComprehensive = ({ subject }: StatsCardComprehensiveProp) => {
  const [stats] = useLocalStorage<IStats>("stats", {});
  const bestWorst = getBestAndWorst(stats, subject);
  return (
    <>
      <h2>Best Category</h2>
      <h3>{bestWorst.categoryResult.best}</h3>
      <h2>Worst Category</h2>
      <h3>{bestWorst.categoryResult.worst}</h3>
      <Table stats={stats} subject={subject} />
    </>
  );
};

export default StatsCardComprehensive;
