import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Test } from "@/types/tests";
import { QuestionOptionKey } from "@/types/question";

type MCQResponse = {
  type: "mcq";
  flag: boolean;
  questionID: string;
  answer: QuestionOptionKey | QuestionOptionKey[];
};

type CodingResponse = {
  type: "coding";
  flag: boolean;
  questionID: string;
  answer: string;
};

type AnswerMap = {
  [questionID: string]: MCQResponse | CodingResponse;
};

type AnswersState = {
  test: Test | null;
  answers: AnswerMap;
  setTest: (test: Test) => void;
  updateAnswer: (questionID: string, answer: QuestionOptionKey) => void;
  deleteAnswer: (questionID: string) => void;
  toggleFlag: (questionID: string) => void;
  checkFlag: (questionID: string) => boolean;
  resetState: () => void; // <- add this
};

export const useAnswersStore = create<AnswersState>()(
  persist(
    (set, get) => ({
      test: null,
      answers: {},
      setTest: (test: Test) => set({ test }),
      updateAnswer: (questionID, answer) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [questionID]: {
              type: "mcq",
              flag: state.answers[questionID]?.flag || false,
              questionID,
              answer,
            },
          },
        })),
        deleteAnswer: (questionID: string) => {
          set((state) => {
            const newAnswers = { ...state.answers };
            delete newAnswers[questionID]; // removes the key
            return { answers: newAnswers };
          });
        },
        
      toggleFlag: (questionID: string) =>
        set((state) => {
          const existing = state.answers[questionID];
          if (!existing) return {};
          return {
            answers: {
              ...state.answers,
              [questionID]: {
                ...existing,
                flag: !existing.flag,
              },
            },
          };
        }),
        checkFlag: (questionID: string) =>{
          const existing = get().answers[questionID]
          return existing?.flag || false
        },
      resetState: () => {
        // Clear localStorage and reset the in-memory state
        useAnswersStore.persist.clearStorage();
        set({ test: null, answers: {} });
      },
    }),
    {
      name: "answers-store",
      partialize: (state) => ({ answers: state.answers }),
    }
  )
);



{/*
  
  answers: {
    q1: {
      type: "mcq",
      flag: false,
      questionID: "q1",
      answer: "B", // selected answer
    },
    q2: {
      type: "coding",
      flag: true,
      questionID: "q2",
      code: `function reverseString(str) {
  return str.split('').reverse().join('');
}`,
    },
  */}