"use client";
import Image from "next/image";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";

interface IOptions {
  A: string | number;
  B: string | number;
  C: string | number;
  D: string | number;
}
interface QuestionCardProps {
  question: string;
  paragraph: string;
  options: IOptions;
  answer: string;
  explanation: string;
  visualsType: string;
  visualsSVG: string;
  domain: string;
  difficulty: string;
}

const QuestionCard = ({
  question,
  paragraph,
  options,
  answer,
  explanation,
  visualsSVG,
  domain,
  difficulty,
}: QuestionCardProps) => {
  const { register, handleSubmit } = useForm();

  const handleSubmitForm = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-between">
        <span>{domain}</span>
        <span>{difficulty}</span>
      </div>
      <h2>
        <ReactMarkdown>{question}</ReactMarkdown>
      </h2>
      {paragraph != "null" && <h2>{paragraph}</h2>}
      {visualsSVG != "null" && (
        <Image
          src={visualsSVG}
          width={100}
          height={100}
          alt="Question visuals/ diagram"
        />
      )}
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <ul>
          {Object.keys(options).map((key) => (
            <li key={key}>
              <label htmlFor={`option-${key}`}>
                <input
                  {...register(`options`)}
                  type="radio"
                  name={`options`}
                  value={key}
                  id={`option-${key}`}
                />
                {options[key as keyof IOptions]}
              </label>
            </li>
          ))}
        </ul>
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
};

export default QuestionCard;
