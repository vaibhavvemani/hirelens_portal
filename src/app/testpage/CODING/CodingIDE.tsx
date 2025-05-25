"use client";

import { Card } from "@/components/ui/card";
import Monaco from "@/app/IDE/Monaco";
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

import { SUPPORTED_LANGUAGES } from "@/app/IDE/languages";
import { ProgrammingLanguage } from "@/types/programmingLanguage";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type CodingIDEProps = {
  languages: ProgrammingLanguage[];
};

const CodingIDE = ({ languages }: CodingIDEProps) => {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState<THEMES>("vs-dark");

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

        <Button className="cursor-pointer">
          <Terminal />
          Run Code
        </Button>
      </div>
      <div className="h-full w-full flex-1 ">
        <Monaco language={language} theme={theme} />
      </div>
    </Card>
  );
};

export default CodingIDE;
