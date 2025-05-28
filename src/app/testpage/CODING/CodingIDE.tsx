"use client";

import { Card } from "@/components/ui/card";
import Monaco from "./Monaco";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Terminal } from "lucide-react";
import { useAnswersStore } from "../zustand/AnswerStore";

import { ProgrammingLanguage } from "@/types/programmingLanguage";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTestStore } from "../zustand/QuestionStore";

type CodingIDEProps = {
  languages: ProgrammingLanguage[];
  boilerplate: string;
};

const CodingIDE = ({ languages, boilerplate }: CodingIDEProps) => {
  const [language, setLanguage] = useState(languages[0].monaco);
  const [theme, setTheme] = useState<THEMES>("vs-dark");
  const [code, setCode] = useState(boilerplate);

  const answer = useAnswersStore((state) => state.answers);
  const updateAnswer = useAnswersStore((state) => state.updateAnswer);
  const deleteAnswer = useAnswersStore((state) => state.deleteAnswer);
  const test = useTestStore((state) => state.test);

  const questions = useTestStore((state) => state.test?.questionIds);
  const questionIndex = useTestStore((state) => state.currentQuestionIndex);
  const currentQuestion = questions?.[questionIndex];

  function handleRun() {
    if (!currentQuestion) return;
    updateAnswer(currentQuestion?.id, currentQuestion?.questionType, code);
  }

  type THEMES = "vs-dark" | "light";

  return (
    <Card className="flex-1 min-h-[500px] w-full overflow-hidden p-2 rounded-2xl">
      <div className="flex gap-3">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Programming Languages</SelectLabel>
              {languages.map((lang: ProgrammingLanguage, index: number) => (
                <SelectItem key={index} value={lang.monaco}>
                  <p>{lang.monaco}</p>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={theme} onValueChange={(val) => setTheme(val as THEMES)}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Theme</SelectLabel>
              <SelectItem value="vs-dark">VS-Dark</SelectItem>
              <SelectItem value="light">Light</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className="cursor-pointer" onClick={handleRun}>
          <Terminal />
          Run Code
        </Button>
      </div>
      <div className="h-full w-full flex-1 ">
        <Monaco
          language={language}
          theme={theme}
          defaultValue={boilerplate}
          onCodeChange={setCode}
        />
      </div>
      {currentQuestion && answer[currentQuestion.id]?.answer && (
        <div className="mt-4 p-2 rounded-lg bg-muted text-sm">
          <strong>Saved Answer:</strong>
          <pre className="whitespace-pre-wrap break-words mt-2">
            {String(answer[currentQuestion.id].answer)}
          </pre>
        </div>
      )}
    </Card>
  );
};

export default CodingIDE;
