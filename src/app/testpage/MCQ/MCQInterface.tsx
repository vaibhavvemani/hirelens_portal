import React from "react";
import { useTestStore } from "../zustand/QuestionStore";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";

const MCQInterface = () => {
  const questions = useTestStore((state) => state.test?.questionIds);
  const questionIndex = useTestStore((state) => state.currentQuestionIndex);
  const test = useTestStore((state) => state.test);
  const currentQuestion = questions?.[questionIndex];

  function formatOption(key:string){
    switch (key) {
      case "option_1":
        return <p>A</p>;
      case "option_2":
        return <p>B</p>;
      case "option_3":
        return <p>C</p>;
      case "option_4":
        return <p>D</p>;
      case "option_5":
        return <p>E</p>;
      default:
        return null;
    }
  }

  return (
    <div className="flex w-full gap-3">
      <Card className="w-full flex flex-col p-3 gap-3 justify-between">
        <div className="flex flex-col gap-4">
          <p className="bg-muted w-fit px-4 py-2 rounded-lg font-bold text-accent-foreground">
            Question: {questionIndex + 1}
          </p>
          <p className="font-medium">{currentQuestion?.text}</p>
        </div>
        <div className="flex flex-row gap-3">
          <Button className="flex-1">Previous</Button>
          <Button className="flex-1">Save and next</Button>
        </div>
      </Card>
      <div className="flex flex-col w-full justify-between gap-2 py-2">
        {currentQuestion?.questionType === "mcq" && currentQuestion.options && (
          <div className="flex flex-col gap-2">
            {Object.entries(currentQuestion.options).map(([key, value]) => (
              <div
                key={key}
                className="p-5 flex justify-between border-2 rounded-sm items-center pr-8"
              >
                <p className="font-medium">{value}</p>
                <h1 className="font-bold text-4xl">{formatOption(key)}</h1>
              </div>
            ))}
          </div>
        )}
        <div className="flex w-full gap-2">
          <Button className="flex-1 bg-amber-500 hover:bg-amber-600 cursor-pointer"><Flag /> Flag</Button>
          <Button className="flex-1">Deselect</Button>
        </div>
      </div>
    </div>
  );
};

export default MCQInterface;
