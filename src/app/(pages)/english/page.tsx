import React, { Suspense } from "react";
import { getSATQuestion } from "@/utils/api";
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
  const subject = "english";
  const question = await getSATQuestion(subject);

  return <QuestionCard question={question} subject={subject} />;
};
