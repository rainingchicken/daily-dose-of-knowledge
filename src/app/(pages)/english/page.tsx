import React, { Suspense } from "react";
import { getSATQuestions } from "@/utils/api";
import QuestionCard from "@/components/QuestionCard";
import QuestionCardSkeleton from "@/components/QuestionCardLoadingSkeleton";

const page = () => {
  return (
    <>
      <h1 className="text-center text-warning text-2xl font-bold m-5">
        Daily Dose of English
      </h1>
      <Suspense fallback={<QuestionCardSkeleton />}>
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
