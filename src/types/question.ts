import { ObjectId } from "mongodb";
export type QuestionOptionKey = "option_1" | "option_2" | "option_3" | "option_4" | "option_5";
export type QuestionType = "mcq" | "coding";
export type OptionType = "multiple" | "single";

export interface Question {
  category: string;
  topic: string;
  difficulty: string;
  text: string; 
  image?: string;
  questionType: QuestionType,
  marks: number; 
  optionType: OptionType;
  options: {
    option_1: string;
    option_2: string;
    option_3: string;
    option_4: string;
    option_5?: string
  };
  answer: QuestionOptionKey; 
}

export interface Filter {
  _id?: ObjectId;
  topic?: string;
  category?: string;
  difficulty?: string;
}
