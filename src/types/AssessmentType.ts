export type QuestionLevel = "level 1" | "level 2" | "level 3";
export type OptionKey = "a" | "b" | "c" | "d";

export interface Question {
  uid: number;
  tag: QuestionLevel;
  category: string;
  statement: string;
  options: Record<OptionKey, string>;
  correct_option: {
    value: OptionKey;
    explanation?: string; // Optional explanation for the correct answer
  };
}

export interface Test {
  name: string;
  description: string;
  cover_image: string;
  time: number; // in minutes
  questions: {
    [questionNumber: number]: Question; // Now questions are properly nested
  };
  // Removed the index signature since we have proper structure now
}

export interface AssessmentSystem {
  tests: {
    [testUid: number]: Test;
  };
}
