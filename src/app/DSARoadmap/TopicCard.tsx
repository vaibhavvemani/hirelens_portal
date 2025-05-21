"use client";

import { Card, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { NodeProps, Handle, Position } from "@xyflow/react";
import { topicQuestions } from "./Questions";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TopicLabel = keyof typeof topicQuestions;

const TopicCard = ({ data }: NodeProps) => {
  function showCompletionStatus(x: boolean) {
    if (x) {
      return <Badge className="bg-green-200 text-green-800">Completed</Badge>;
    } else {
      return <Badge className="bg-red-200 text-red-800">Not Completed</Badge>;
    }
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card className="p-2 min-w-40 text-center relative cursor-pointer">
          <Handle
            type="target"
            position={Position.Top}
            className="w-2 h-2 bg-blue-500"
          />
          <CardTitle className="text-sm">{data.label as string}</CardTitle>
          <Progress value={data.progress as number} />
          <Handle
            type="source"
            position={Position.Bottom}
            className="w-2 h-2 bg-green-500"
          />
        </Card>
      </SheetTrigger>
      <SheetContent className="min-w-[50vw]">
        <SheetHeader className="flex flex-row justify-between">
          <div className="flex flex-col gap-0">
            <SheetTitle className="text-2xl">
              <p>{data.label as string}</p>
            </SheetTitle>
            <SheetDescription className="flex gap-5">
              Questions on {data.label as string}
            </SheetDescription>
          </div>
          <Badge className="bg-muted text-muted-foreground mr-10 h-fit self-center px-3 py-2 font-bold">
            <p>
              {
                topicQuestions[data.label as TopicLabel]?.filter(
                  (question) => question.completed
                ).length
              }
              /{topicQuestions[data.label as TopicLabel]?.length} questions
              completed
            </p>
          </Badge>
        </SheetHeader>
        <div className="p-2 border-2 mx-3 rounded-lg">
          <Table>
            <TableCaption>
              List of questions on {data.label as TopicLabel}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Question Name</TableHead>
                <TableHead className="text-center">Difficulty</TableHead>
                <TableHead className="text-right">Completion Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topicQuestions[data.label as TopicLabel]?.map(
                (Question, index) => (
                  <TableRow key={index}>
                    <TableCell className="p-3">{Question.name}</TableCell>
                    <TableCell className="p-3 text-center">
                      {Question.difficulty}
                    </TableCell>
                    <TableCell className="p-3 text-right">
                      {showCompletionStatus(Question.completed)}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TopicCard;
