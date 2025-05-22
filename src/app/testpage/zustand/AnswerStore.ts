import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Test } from "@/types/tests";
import { QuestionOptionKey } from "@/types/question";

type MCQResponse = {
  type: "mcq";
  flag: boolean;
  questionID: string;
  answer: QuestionOptionKey;
};

type CodingResponse = {
  type: "coding";
  flag: boolean;
  questionID: string;
  code: string;
};

type AnswerMap = {
  [questionID: string]: MCQResponse | CodingResponse;
};

type AnswersState = {
  test: Test | null;
  answers: AnswerMap;
  flag: boolean;
  setTest: (test: Test) => void;
  setAnswers: (answers: AnswerMap) => void;
  updateAnswer: (response: MCQResponse | CodingResponse) => void;
  toggleFlag: () => void;
  setFlag: (value: boolean) => void;
};

export const useAnswersStore = create<AnswersState>()(
  persist(
    (set, get) => ({
      test: null,
      answers: {},
      flag: false,
      setTest: (test: Test) => set({ test }),
      setAnswers: (answers: AnswerMap) => set({ answers }),
      updateAnswer: (response) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [response.questionID]: response,
          },
        })),
      toggleFlag: () => set((state) => ({ flag: !state.flag })),
      setFlag: (value: boolean) => set({ flag: value }),
    }),
    {
      name: "answers-store",
      partialize: (state) => ({ answers: state.answers, flag: state.flag }),
    }
  )
);
