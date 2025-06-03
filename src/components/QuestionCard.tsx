import React from "react";
import ReactMarkdown from "react-markdown";

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
        <ReactMarkdown>{question}</ReactMarkdown>
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
