export interface IQuestions {
  id: string;
  domain: string;
  visuals: {
    type: string | null;
    svg_content: string | null;
  };
  question: {
    choices: {
      A: string | number;
      B: string | number;
      C: string | number;
      D: string | number;
    };
    question: string;
    paragraph: string;
    explanation: string;
    correct_answer: "A" | "B" | "C" | "D";
  };
  difficulty: string;
}
