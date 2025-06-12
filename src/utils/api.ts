export const getSATQuestion = async (subject: "math" | "english") => {
  const result = await fetch(
    `https://api.jsonsilo.com/public/942c3c3b-3a0c-4be3-81c2-12029def19f5`,
    { cache: "no-store" }
  );
  const parsedResult = await result.json();
  const randomArray = Math.floor(Math.random() * parsedResult[subject].length);
  const randomResult = parsedResult[subject][randomArray];

  return randomResult;
};
