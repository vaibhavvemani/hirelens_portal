"use client";

import { useParams } from "next/navigation";
import SampleAssessment from "@/app/assessments/components/SampleAssessments";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Questions from "../Questions";
import { useEffect, useState } from "react";
import { Question } from "@/types/AssessmentType";
import { cn } from "@/lib/utils";
import OptionSelector from "../OptionSelector";



export default function TestTakingPage() {
  const params = useParams();
  const testID = params.testID;
  const assessment = SampleAssessment.tests[Number(testID)];

  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const questionKey = currentQuestion;
  const question = assessment.questions[questionKey] as Question;

  const [answers, setAnswers] = useState<Record<number, string | null>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  function handleNext() {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: selectedOption }));
  
    if (currentQuestion < Object.keys(assessment.questions).length) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      setSelectedOption(answers[nextQuestion] || null);
    } else {
      alert("last question reached");
    }
  }
  
  function handlePrev() {
    if (currentQuestion !== 1) {
      const prevQuestion = currentQuestion - 1;
      setCurrentQuestion(prevQuestion);
      setSelectedOption(answers[prevQuestion] || null);
    } else {
      alert("first question reached");
    }
  }
  

  useEffect(() => {}, [currentQuestion]);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1300px] w-full flex flex-col p-5 items-center gap-4">
        <Card className="flex flex-row w-full justify-between p-4">
          <h1 className="font-bold text-2xl w-[400px]">
            {assessment.name.replace(/_/g, " ")}
          </h1>
          <div className="w-[400px] flex justify-center">
            <Label className="bg-accent px-4 rounded-sm text-accent-foreground font-bold text-lg">
              29:59
            </Label>
          </div>
          <div className="w-[400px] flex justify-end">
            <Button>Submit</Button>
          </div>
        </Card>
        <div className="flex w-full min-h-[450px]">
          <Card className="w-3/5 p-4 flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="text-accent-foreground font-bold text-2xl bg-accent w-fit px-2 py-1 rounded-md">
                Question {currentQuestion} of{" "}
                {Object.keys(assessment.questions).length}
              </h1>
              <Questions question={question} />
            </div>
            <div className="flex w-full justify-between">
              <Button className="w-50/101" onClick={handlePrev}>
                Previous
              </Button>
              <Button className="w-50/101" onClick={handleNext}>
                Save and Next
              </Button>
            </div>
          </Card>

          <div className="flex flex-col w-2/5 pl-4">
            <OptionSelector
              options={question.options}
              selected={selectedOption}
              onSelect={(key) => setSelectedOption(key)}
            />
          </div>
        </div>
        <Card className="w-full p-4 flex flex-row gap-2 justify-center-safe">
          {Array.from(
            { length: Object.keys(assessment.questions).length },
            (_, i) => {
              const qNum = i + 1;
              return (
                <Button
                  key={qNum}
                  variant={currentQuestion === qNum ? "default" : "outline"}
                  className={cn(
                    "w-fit h-fit px-5 py-2",
                    currentQuestion === qNum
                      ? "bg-blue-300 text-white hover:bg-blue-400"
                      : ""
                  )}
                  onClick={() => setCurrentQuestion(qNum)}
                >
                  {qNum}
                </Button>
              );
            }
          )}
        </Card>
      </div>
    </div>
  );
}
