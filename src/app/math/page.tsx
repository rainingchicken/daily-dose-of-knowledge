import React, { Suspense } from "react";
import MathClientPage from "./client";
import LoadingSkeleton from "./LoadingSkeleton";
import { getSATQuestions } from "@/utils/api";

const page = () => {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <MathQuestion />
    </Suspense>
  );
};

export default page;

const MathQuestion = async () => {
  const data = await getSATQuestions("math");
  return <MathClientPage question={data} />;
};
