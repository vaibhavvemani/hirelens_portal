import { ObjectId } from "mongodb";
import { ProgrammingLanguage } from "./programmingLanguage";

type QuestionDifficulty = "easy" | "medium" | "hard";
type OptionType = "multiple" | "single";
export type QuestionOptionKey = "option_1" | "option_2" | "option_3" | "option_4" | "option_5" | null;

type sampleResults = {
  input: string;
  output: string;
};
type hiddenTestCases = {
  input: string;
  output: string;
};

type BaseQuestion = {
  id: string;
  category: string;
  topic: string;
  difficulty: QuestionDifficulty;
  text: string;
  image?: string;
  marks: string;
};

type MCQ = BaseQuestion & {
  questionType: "mcq";
  optionType: OptionType;
  options: {
    option_1: string;
    option_2: string;
    option_3: string;
    option_4: string;
    option_5?: string;
  };
  answer: QuestionOptionKey;
};

type Coding = BaseQuestion & {
  questionType: "coding";
  sampleResults: sampleResults[];
  hiddenTestCases: hiddenTestCases[];
  languages? : ProgrammingLanguage[];
  solution?: string;
};

export interface Filter {
  _id?: ObjectId;
  topic?: string;
  category?: string;
  difficulty?: string;
}

export type Question = MCQ | Coding;
