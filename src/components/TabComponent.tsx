"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ISubject } from "@/utils/types";

import StatsCardComprehensive from "./StatsCardComprehensive";

interface TabComponentProps {
  subjects: ISubject[];
}

const TabComponent = ({ subjects }: TabComponentProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedTab, setSelectedTab] = useState<ISubject | null>(null);

  useEffect(() => {
    const tabFromURL = searchParams.get("tab");
    if (tabFromURL && subjects.includes(tabFromURL as ISubject)) {
      setSelectedTab(tabFromURL as ISubject);
    } else {
      setSelectedTab(subjects[0]);
    }
  }, [searchParams, subjects]);

  // Render nothing until the tab is determined on client
  if (!selectedTab) return null;

  const handleTabChange = (subject: ISubject) => {
    setSelectedTab(subject);
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("tab", subject);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="tabs tabs-border flex justify-center max-w-3xl m-auto">
      {subjects.map((subject) => (
        <React.Fragment key={subject}>
          <input
            type="radio"
            name="my_tabs"
            className="tab"
            checked={selectedTab === subject}
            onChange={() => handleTabChange(subject)}
            aria-label={`${subject.toUpperCase()} STATS`}
          />
          {selectedTab === subject && (
            <div className="tab-content border-base-300 bg-base-100 p-10">
              <StatsCardComprehensive subject={subject} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TabComponent;
