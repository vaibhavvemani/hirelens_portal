export type QuestionOptionKey = "option_1" | "option_2" | "option_3" | "option_4";

export interface Question {
  topic: string;
  catagory: string;
  difficulty: string;
  text: string; 
  options: {
    option_1: string;
    option_2: string;
    option_3: string;
    option_4: string;
  };
  answer: string; 
}

export interface Filter {
  topic?: string;
  category?: "quantitative" | "verbal" | "technical";
  difficulty?: "hard" | "medium" | "easy";
}
