"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Test } from "@/types/AssessmentType";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

import { countQuestions } from "./Confirmation";

interface CountdownProps {
  assessment: Test;
  testId: number;
}
const Countdown = ({ assessment, testId }: CountdownProps) => {
  const [secondsLeft, setSecondsLeft] = useState(10);
  const router = useRouter();

  useEffect(() => {
    if (secondsLeft === 0) {
      router.push(`/testpage/${testId}`);
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev -1); //add -1 here
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft, router, testId]);

  function calculateProgress(){
    console.log(assessment)
    return ((60-secondsLeft)/60)*100
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <Card className=" min-w-[650px] w-fit p-3 flex flex-col gap-3 py-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">
            {assessment.name.replace(/_/g, " ")}
          </h1>
          <p className="text-lg font-bold bg-accent h-fit px-2 py-1 rounded-md">
            Time: {assessment.time} mins
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Number of questions</TableHead>
              <TableHead className="text-center">Marks per question</TableHead>
              <TableHead className="text-right">Total marks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="p-3">
                {countQuestions(assessment)}
              </TableCell>
              <TableCell className="p-3 text-center">1</TableCell>
              <TableCell className="p-3 text-right">
                {countQuestions(assessment) * 1}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-muted-foreground text-right">
          Your test starts in: {secondsLeft} second{secondsLeft !== 1 && "s"}
        </p>
        <Progress value={calculateProgress()}></Progress>
        </div>
      </Card>
    </div>
  );
};

export default Countdown;
