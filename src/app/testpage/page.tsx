"use client";

import { Label } from "@/components/ui/label";
import { useTestStore } from "./zustand/QuestionStore";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MCQInterface from "./MCQ/MCQInterface";
import CodingInterface from "./CODING/CodingInterface";
import QuestionNavigator from "./QuestionNavigator";

const TestPage = () => {
  const test = useTestStore((state) => state.test);
  const currentQuestionIndex = useTestStore(
    (state) => state.currentQuestionIndex
  );
  const nextQuestion = useTestStore((state) => state.nextQuestion);
  const previousQuestion = useTestStore((state) => state.previousQuestion);

  if (!test) {
    return (
      <div className="text-center mt-10 text-lg font-medium">
        No test data found.
      </div>
    );
  }

  const questionIds = test.questionIds;
  const currentQuestion = questionIds[currentQuestionIndex];

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-col flex-1 gap-5 w-full max-w-[1300px] px-4 pb-3">
        <div className="flex flex-col">
          <Card className="w-full flex flex-row justify-between items-center text-center p-5 py-3">
            <CardTitle className="w-1/3 text-left text-2xl font-bold">
              {test.name.replace(/_/g, " ")}
            </CardTitle>
            <div className="w-1/3 flex justify-center">
              <p className="w-fit text-center bg-accent text-accent-foreground text-2xl px-5 py-2 rounded-lg font-bold">
                29:59
              </p>
            </div>
            <div className="w-1/3 text-right">
              <Button className="w-fit p-5 font-bold text-base cursor-pointer">
                Submit test
              </Button>
            </div>
          </Card>
          {currentQuestion.questionType === "coding" ? (
            <CodingInterface />
          ) : (
            <MCQInterface />
          )}
          <QuestionNavigator />
        </div>
      </div>
    </div>
  );
};

export default TestPage;
