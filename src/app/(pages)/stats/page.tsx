import StatsCardSkeleton from "@/components/StatsCardLoadingSkeleton";
import TabComponent from "@/components/TabComponent";
import { ISubject } from "@/utils/types";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Stats",
  description: "Detailed user stats",
};

const subjects: ISubject[] = ["math", "english"];

const page = () => {
  return (
    <div>
      <h1 className="text-center text-primary text-2xl font-bold m-5">
        Statistics
      </h1>
      <Suspense fallback={<StatsCardSkeleton />}>
        <TabComponent subjects={subjects} />
      </Suspense>
    </div>
  );
};

export default page;
