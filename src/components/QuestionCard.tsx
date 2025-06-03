"use client";

import Image from "next/image";
import { type FieldValues, useForm } from "react-hook-form";
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
      <div className="card-title flex flex-row items-center justify-between pb-2 space-y-0">
        <div className="badge px-3 py-1 badge-dash">{domain}</div>
        <div
          className={`badge badge-outline px-3 py-1 ${getDifficultyColor(
            difficulty
          )}`}
        >
          {difficulty}
        </div>
      </div>
      <div className="card-body space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold leading-tight">
            <ReactMarkdown>{question}</ReactMarkdown>
          </h2>
          {paragraph !== "null" && (
            <p className="text-gray-600 dark:text-gray-300">{paragraph}</p>
          )}
        </div>

        {visualsSVG !== "null" && (
          <div className="flex justify-center my-4">
            <Image
              src={visualsSVG || "/placeholder.svg"}
              width={300}
              height={200}
              alt="Question diagram"
              className="object-contain rounded-md"
            />
          </div>
        )}

        <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6">
          <ul className="space-y-3">
            {Object.keys(options).map((key) => (
              <li
                key={key}
                className="flex items-center space-x-3 p-3 rounded-md border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/50 transition-colors"
              >
                <input
                  type="radio"
                  id={`option-${key}`}
                  value={key}
                  {...register("options")}
                  name="options"
                  className="radio-accent radio-md radio"
                  required
                />
                <label
                  htmlFor={`option-${key}`}
                  className="label flex-1 cursor-pointer font-medium"
                >
                  <span className="font-bold mr-2">{key}.</span>
                  {options[key as keyof IOptions]}
                </label>
              </li>
            ))}
          </ul>

          <div className="card-actions px-0 pt-2">
            <button
              type="submit"
              className=" btn w-full btn-accent btn-outline"
            >
              Submit Answer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionCard;
