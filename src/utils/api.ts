import { cookies } from "next/headers";
import { cache } from "react";
import { IStats, ISubject } from "./types";

export const getSATQuestions = async (subject: "math" | "english") => {
  const result = await fetch(
    `https://api.jsonsilo.com/public/942c3c3b-3a0c-4be3-81c2-12029def19f5`
  );
  const parsedResult = await result.json();
  const randomArray = Math.floor(Math.random() * parsedResult[subject].length);
  const randomResult = parsedResult[subject][randomArray];
  console.log(randomResult);
  return randomResult;
};

export const getStats = cache(async (subject: ISubject) => {
  const cookieStore = await cookies();
  const raw = cookieStore.get("STATS")?.value;

  try {
    const parsed: IStats = JSON.parse(raw ?? "");
    return parsed;
  } catch {
    return { [subject]: { score: 0 } };
  }
});
