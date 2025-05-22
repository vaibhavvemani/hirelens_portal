import { create } from "zustand";
import { Test } from "@/types/tests";

type TestState = {
  test: Test | null;
  currentQuestionIndex: number;
  setTest: (test: Test) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
};

export const useTestStore = create<TestState>((set) => ({
  test: null,
  currentQuestionIndex: 0,
  setTest: (test) => set({ test, currentQuestionIndex: 0 }),
  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: Math.min(
        state.currentQuestionIndex + 1,
        (state.test?.questionIds.length ?? 1) - 1
      ),
    })),
    previousQuestion: () =>
        set((state) => ({
          currentQuestionIndex: Math.max(
            state.currentQuestionIndex - 1,0
          ),
        })),
}));
