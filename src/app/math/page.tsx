import React, { Suspense } from "react";
import MathClientPage from "./client";
import LoadingSkeleton from "./LoadingSkeleton";
import { getSATQuestions } from "@/utils/api";

const page = () => {
  return (
    <>
      <h1 className="text-center text-accent text-2xl font-bold m-5">
        Daily Does of Math
      </h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <MathQuestion />
      </Suspense>
    </>
  );
};

export default page;

const MathQuestion = async () => {
  const data = await getSATQuestions("math");
  return <MathClientPage question={data} />;
};
