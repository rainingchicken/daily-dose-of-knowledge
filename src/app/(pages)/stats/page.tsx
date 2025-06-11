import TabComponent from "@/components/TabComponent";
import { ISubject } from "@/utils/types";
import React from "react";

const subjects: ISubject[] = ["math", "english"];

const page = () => {
  return (
    <div>
      <h1 className="text-center text-primary text-2xl font-bold m-5">
        Statistics
      </h1>
      <TabComponent subjects={subjects} />
    </div>
  );
};

export default page;
