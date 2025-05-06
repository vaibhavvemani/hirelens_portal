export type questionLevel = "level 1" | "level 2" | "level 3";
export type OptionKey = "a" | "b" | "c" | "d";

export interface Question {
  uid: number;
  tag: questionLevel;
  category: string;
  statement: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correct_option: {
    value: OptionKey;
  };
}

export interface Test {
  name: string
  description: string;
  cover_image: string;
  time: number; // in minutes
  [key: string]: Question | string | number;
}

export interface AssessmentSystem {
  tests: {
    [uid: number]: Test;
  };
}