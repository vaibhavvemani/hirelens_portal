import CodingIDE from "./CodingIDE";
import { Card } from "@/components/ui/card";
import { useTestStore } from "../zustand/QuestionStore";
import { useAnswersStore } from "../zustand/AnswerStore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SUPPORTED_LANGUAGES } from "@/app/IDE/languages";
import { Flag } from "lucide-react";

const CodingInterface = () => {
  const test = useTestStore((state) => state.test);
  const questionIndex = useTestStore((state) => state.currentQuestionIndex);
  const goToQuestion = useTestStore((state) => state.goToQuestion);
  const question = test?.questionIds[questionIndex];
  const toggleFlag = useAnswersStore((state) => state.toggleFlag);
  const isFlagged = useAnswersStore((state) =>
    question?.id ? state.answers[question.id]?.flag || false : false
  );

  function handleNext() {
    goToQuestion(questionIndex + 1);
  }

  function handlePrev() {
    goToQuestion(questionIndex - 1);
  }

  function flag() {
    if (!question) return;
    question?.questionType === "coding" ? toggleFlag(question.id) : null;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col flex-1 gap-5 w-full max-w-[1300px] h-full">
        <div className="flex gap-4 h-[650px]">
          <Card className="p-3 gap-0 w-1/3 justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="p-2 px-4 text-lg font-bold bg-accent rounded-lg w-fit">
                Question: {questionIndex + 1}
              </h1>
              {question?.image && (
                <Image src={question.image} alt={question.text ?? ""} />
              )}
              <p className="font-medium text-base">{question?.text}</p>
              <h3 className="font-bold text-muted-foreground text-lg">
                Example test cases:
              </h3>
              {question?.questionType === "coding" ? (
                question.sampleResults.map((result, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <p className="w-fit font-bold">Example: {index + 1}</p>
                    <div className="flex flex-col gap-0 ml-1 pl-2 border-l-4">
                      <div className="flex flex-row gap-2">
                        <p className="font-bold">Input:</p>{" "}
                        <p className="font-medium">{result.input}</p>
                      </div>
                      <div className="flex flex-row gap-2">
                        <p className="font-bold">Output:</p>{" "}
                        <p className="font-medium">{result.output}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No sample results</p>
              )}
            </div>
            <div className="flex w-full gap-2">
              <Button className="flex-1 cursor-pointer" onClick={handlePrev}>
                Previous
              </Button>
              <Button
                className="cursor-pointer bg-amber-500 hover:bg-amber-600"
                onClick={flag}
              >
                <Flag />
                {isFlagged ? <p>Unflag</p> : <p>Flag</p>}
              </Button>

              <Button className="flex-1 cursor-pointer" onClick={handleNext}>
                Save and Next
              </Button>
            </div>
          </Card>
          <CodingIDE
            languages={
              question?.questionType === "coding"
                ? question?.languages ?? SUPPORTED_LANGUAGES
                : SUPPORTED_LANGUAGES
            }
            boilerplate={
              question?.questionType === "coding"
                ? question?.boilerplate ?? ""
                : ""
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CodingInterface;
