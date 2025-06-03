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
      paragraph={question.question.paragraph}
      options={question.question.choices}
      answer={question.question.correct_answer}
      explanation={question.question.explanation}
      visualsType={question.visuals.type}
      visualsSVG={question.visuals.svg_content}
      domain={question.domain}
      difficulty={question.difficulty}
    />
  );
};

export default MathClientPage;
