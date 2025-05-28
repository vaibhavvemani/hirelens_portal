import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Test } from "@/types/tests";
import { QuestionOptionKey } from "@/types/question";

type TestState = {
  test: Test | null;
  startTime: Date | null;
  setStartTime: (date: Date) => void;
  currentQuestionIndex: number;
  setTest: (test: Test) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (index: number) => void;
};

export const useTestStore = create<TestState>()(
  persist(
    (set, get) => ({
      test: null,
      currentQuestionIndex: 0,
      setTest: (test) => set({ test, currentQuestionIndex: 0 }),
      nextQuestion: () => {
        const state = get();
        return set({
          currentQuestionIndex: Math.min(
            state.currentQuestionIndex + 1,
            (state.test?.questionIds.length ?? 1) - 1
          ),
        });
      },
      startTime: null,
      setStartTime: (date) =>set({startTime: date}),
      previousQuestion: () =>
        set((state) => ({
          currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
        })),
      goToQuestion: (index: number) => {
        const { test } = get();
        if (!test) return;

        const maxIndex = test.questionIds.length - 1;
        const clampedIndex = Math.max(0, Math.min(index, maxIndex));
        set({ currentQuestionIndex: clampedIndex });
      },
    }),
    {
      name: "test-store",
    }
  )
);
