import React, { Suspense } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import { getSATQuestions } from "@/utils/api";
import QuestionCard from "@/components/QuestionCard";

const page = () => {
  return (
    <>
      <h1 className="text-center text-accent text-2xl font-bold m-5">
        Daily Dose of English
      </h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <MathQuestion />
      </Suspense>
    </>
  );
};

export default page;

const MathQuestion = async () => {
  const data = await getSATQuestions("english");
  return <QuestionCard question={data} subject="english" />;
};
