import { IQuestions } from "@/utils/types";
import React from "react";

interface QuestionCardProps {
  question: string;
  //   options: Questions;
  //   answer: Questions;
  //   explanation: Questions;
}

const QuestionCard = ({
  question,
}: //   options,
//   answer,
//   explanation,
QuestionCardProps) => {
  return (
    <div>
      <ul>
        <li>{question}</li>
        {/* <li>
          {Object.keys(options).map((key) => (
            <p key={key}>{options[key]}</p>
          ))}
        </li>
        <li>{answer}</li>
        <li>{explanation}</li> */}
      </ul>
    </div>
  );
};

export default QuestionCard;
