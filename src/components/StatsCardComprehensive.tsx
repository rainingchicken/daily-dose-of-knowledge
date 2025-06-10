import type { IStats, ISubject } from "@/utils/types";
import React from "react";
import TabComponent from "./TabComponent";

interface StatsCardComprehensiveProps {
  stats?: IStats;
}
const subjects: ISubject[] = ["math", "english"];

const StatsCardComprehensive = ({ stats }: StatsCardComprehensiveProps) => {
  return (
    <>
      <TabComponent subjects={subjects} />
    </>
  );
};

export default StatsCardComprehensive;
