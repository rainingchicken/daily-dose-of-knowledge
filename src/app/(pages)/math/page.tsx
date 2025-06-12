import React, { Suspense } from "react";
import { getSATQuestion } from "@/utils/api";
import QuestionCard from "@/components/QuestionCard";
import QuestionCardSkeleton from "@/components/QuestionCardLoadingSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Math Problem",
  description: "Page to practice a math problem",
};

const page = () => {
  return (
    <>
      <h1 className="text-center text-accent text-2xl font-bold m-5">
        Daily Dose of Math
      </h1>
      <Suspense fallback={<QuestionCardSkeleton />}>
        <MathQuestion />
      </Suspense>
    </>
  );
};

export default page;

const MathQuestion = async () => {
  const subject = "math";
  const question = await getSATQuestion(subject);

  return <QuestionCard question={question} subject={subject} />;
};
