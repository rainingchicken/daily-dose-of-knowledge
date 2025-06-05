export interface IQuestions {
  id: string;
  domain: string;
  visuals: {
    type: string;
    svg_content: string;
  };
  question: {
    choices: IOptions;
    question: string;
    paragraph: string;
    explanation: string;
    correct_answer: "A" | "B" | "C" | "D";
  };
  difficulty: string;
}

export interface IOptions {
  A: string;
  B: string;
  C: string;
  D: string;
}

export interface IStats {
  [subject: string]: {
    score: number;
  };
}

export type ISubject = "math" | "english";
