"use client";

import { useTestStore } from "./zustand/QuestionStore";
import { useAnswersStore } from "./zustand/AnswerStore";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MCQInterface from "./MCQ/MCQInterface";
import CodingInterface from "./CODING/CodingInterface";
import QuestionNavigator from "./QuestionNavigator";
import CountdownClock from "./CountdownClock";
import { useRouter } from "next/navigation";

const TestPage = () => {
  const router = useRouter();
  const test = useTestStore((state) => state.test);
  const currentQuestionIndex = useTestStore(
    (state) => state.currentQuestionIndex
  );
  const resetState = useAnswersStore((state) => state.resetState);
  const answers = useAnswersStore((state) => state.answers);
  const startTime = useTestStore((state) => state.startTime);

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
        <div className="flex flex-col gap-5">
          <Card className="w-full flex flex-row justify-between items-center text-center p-5 py-3">
            <CardTitle className="w-1/3 text-left text-2xl font-bold">
              {test.name.replace(/_/g, " ")}
            </CardTitle>
            <div className="w-1/3 flex justify-center">
              <CountdownClock
                startTime={startTime}
                duration={Number(test?.duration) ?? null}
                onComplete={() => {
                  // submitTestFunction()
                  console.log('test submitted')
                  resetState(); // Submit logic
                  setTimeout(() => {
                    router.push("/assessments");
                  }, 300);
                }}
              />
            </div>
            <div className="w-1/3 text-right">
              <Button
                className="w-fit p-5 font-bold text-base cursor-pointer"
                onClick={() => resetState()}
              >
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
        {/* <div className="bg-muted p-4 rounded-md mt-4 space-y-2">
          <h2 className="text-xl font-bold">Submitted Answers:</h2>
          {Object.entries(answers).length === 0 ? (
            <p className="text-muted-foreground">No answers submitted.</p>
          ) : (
            Object.entries(answers).map(([questionID, answer]) => (
              <div
                key={questionID}
                className="border p-3 rounded-md bg-white shadow-sm"
              >
                <p className="font-semibold">Question ID: {questionID}</p>
                <p>Type: {answer.type}</p>
                <p>Flagged: {answer.flag ? "Yes" : "No"}</p>
                <p>
                  Answer:{" "}
                  {answer.type === "mcq"
                    ? Array.isArray(answer.answer)
                      ? answer.answer.join(", ")
                      : answer.answer
                    : answer.answer}
                </p>
              </div>
            ))
          )}
        </div> */}
      </div>
    </div>
  );
};

export default TestPage;
