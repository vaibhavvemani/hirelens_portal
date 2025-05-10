"use client";

import { Card,CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Test } from "@/types/tests";
import Link from "next/link";

interface ConfirmationProps {
    assessment: Test
    onStart: () => void;
  }  

export function countQuestions(assessment: Record<string, any>): number {
    return Object.keys(assessment).length
  }

  const Confirmation = ({ assessment, onStart }: ConfirmationProps)=> {
  return (
    <div className="flex flex-col justify-center w-full h-full items-center">
    <Card className="flex flex-col p-3 min-w-[600px] gap-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-0">
          <CardTitle className="text-2xl">{assessment.name.replace(/_/g, " ")}</CardTitle>
          <CardDescription className="text-base">{assessment.desc}</CardDescription>
        </div>
        <p className="text-lg font-bold bg-accent h-fit px-2 py-1 rounded-md">
          Time: {assessment.duration} mins
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
            <TableCell className="p-3">{countQuestions(assessment.questionIds)}</TableCell>
            <TableCell className="p-3 text-center">1</TableCell>
            <TableCell className="p-3 text-right">{countQuestions(assessment.questionIds) * 1}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex w-full justify-between gap-0">
      <Button onClick={onStart} className="w-50/101">Start test</Button>
      
      <Link className="w-50/101" href="/assessments">
      <Button className="w-full">
        Back to Assessments
        </Button>
      </Link>
      
      </div>
    </Card>
  </div>
  )
}

export default Confirmation