import QuestionCard from "@/components/QuestionCard";
import type { IQuestions } from "@/utils/types";
import React from "react";

interface MathClientPageProps {
  question: IQuestions;
}

const MathClientPage = ({ question }: MathClientPageProps) => {
  console.log(question);
  return (
    <QuestionCard
      question={question.question.question}
      //   options={question.options}
      //   answer={question.answer}
      //   explanation={question.explanation}
    />
  );
};

export default MathClientPage;
