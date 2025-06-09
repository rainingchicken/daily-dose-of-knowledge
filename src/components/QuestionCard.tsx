"use client";

import Image from "next/image";
import { type FieldValues, useForm } from "react-hook-form";
import MathMarkdown from "./MathMarkdown";
import type { IOptions, IQuestions, ISubject } from "@/utils/types";
import { useState } from "react";
import StatsCard from "./StatsCard";

interface QuestionCardProps {
  question: IQuestions;
  subject: ISubject;
}

const QuestionCard = ({ question, subject }: QuestionCardProps) => {
  const { register, handleSubmit } = useForm();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmitForm = (data: FieldValues) => {
    if (data.options === question.question.correct_answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setHasSubmitted(true);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "badge-soft badge-success";
      case "medium":
        return "badge-soft badge-warning";
      case "hard":
        return "badge-soft badge-error";
      default:
        return "badge-soft badge-info";
    }
  };

  return (
    <div className="card w-full max-w-3xl mx-auto shadow-md my-8 p-5">
      <div className="card-title flex flex-row items-center justify-between pb-2 space-y-0 flex-wrap">
        <div className="badge px-3 py-1 badge-dash">{question.domain}</div>
        <div
          className={`badge badge-outline px-3 py-1 ${getDifficultyColor(
            question.difficulty
          )}`}
        >
          {question.difficulty}
        </div>
      </div>
      <div className="card-body space-y-4">
        <div className="space-y-2">
          {question.question.paragraph !== "null" && (
            <p className="text-gray-600 dark:text-gray-300">
              {question.question.paragraph}
            </p>
          )}
          <h2 className="text-xl font-semibold leading-tight">
            <MathMarkdown markdown={question.question.question} />
          </h2>
        </div>
        {question.visuals && question.visuals.svg_content !== "null" && (
          <div className="flex justify-center my-4">
            <Image
              src={question.visuals.svg_content || "/placeholder.svg"}
              width={300}
              height={200}
              alt="Question diagram"
              className="object-contain rounded-md"
            />
          </div>
        )}
        <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6">
          <ul className="space-y-3">
            {Object.keys(question.question.choices).map((key) => (
              <li
                key={key}
                className={`flex items-center space-x-3 p-3 rounded-md border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/50 transition-colors  ${
                  hasSubmitted
                    ? question.question.correct_answer == key
                      ? "bg-success/20"
                      : "bg-error/20"
                    : "bg-transparent"
                }`}
              >
                <input
                  type="radio"
                  id={`option-${key}`}
                  value={key}
                  {...register("options")}
                  name="options"
                  className={`${
                    subject === "math" ? "radio-accent" : "radio-warning"
                  } radio-md radio`}
                  required
                  disabled={hasSubmitted}
                />
                <label
                  htmlFor={`option-${key}`}
                  className={`label flex-1 ${
                    hasSubmitted ? "cursor-text" : "cursor-pointer"
                  } whitespace-normal`}
                >
                  <span className="font-bold mr-2">{key}.</span>
                  <MathMarkdown
                    markdown={`${subject === "math" ? "$" : ""}${
                      question.question.choices[key as keyof IOptions]
                    }${subject === "math" ? "$" : ""}`}
                  />
                </label>
              </li>
            ))}
          </ul>

          <div className="card-actions px-0 pt-2">
            {!hasSubmitted && (
              <button
                type="submit"
                className={`btn w-full ${
                  subject === "math" ? "btn-accent" : "btn-warning"
                } btn-outline`}
              >
                Submit Answer
              </button>
            )}
          </div>
        </form>
        {hasSubmitted && (
          <>
            <div
              className={`card card-border ${
                isCorrect ? "border-success" : "border-error"
              } bg-base-100`}
            >
              <div className="card-body">
                <h2
                  className={`card-title text-center justify-center ${
                    isCorrect ? "text-success" : "text-error"
                  }`}
                >
                  {isCorrect ? "Correct!" : "Wrong"}
                </h2>
                <MathMarkdown markdown={`${question.question.explanation}`} />
              </div>
            </div>
            <StatsCard
              score={isCorrect ? 1 : 0}
              subject={subject}
              category={question.domain}
              difficulty={question.difficulty}
              time={0}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
