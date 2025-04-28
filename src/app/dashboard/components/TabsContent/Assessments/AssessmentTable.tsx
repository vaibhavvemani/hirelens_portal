import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { sampleAssessments, Assessment } from "./SampleAssessments";
import { Button } from "@/components/ui/button";
import formatDueDate from "./FormatDueDate";
import { Badge } from "@/components/ui/badge";
import { ReactElement } from "react";
import { Bagel_Fat_One } from "next/font/google";

type AssessmentTableProps = {
    status: "Due" | "Submitted" | "Overdue" ;
  };

  function dueDays(due: Date): ReactElement{
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);
    const diffInMs = due.getTime() - today.getTime();
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

    if(diffInDays < 0){
        return <Badge className="bg-red-400 px-2 py-1">Overdue by {Math.abs(diffInDays)} days</Badge>
    }

    if(diffInDays <= 3){
        return <Badge className="bg-red-400 font-bold w-[130px] px-2 py-1">High Priority</Badge>
    }
    else{
        return <Badge className="bg-green-400 font-bold w-[130px] px-2 py-1">Medium Priority</Badge>
    }


  }


const AssessmentTable = ({status}: AssessmentTableProps) => {
  return (
    <div className="p-2 rounded-2xl border-2 mt-2">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Assignment</TableHead>
                    <TableHead>{status != "Submitted"? "Due":"Submitted"} Date</TableHead>
                    <TableHead className="w-fit">Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sampleAssessments.map((assessment: Assessment, index: number)=>(
                    assessment.status === status?
                    <TableRow>
                        <TableCell>{assessment.title}</TableCell>
                        <TableCell>{formatDueDate(assessment.dueDate)}</TableCell>
                        <TableCell>
                            { assessment.status == "Due"?
                            dueDays(assessment.dueDate)
                            :
                            assessment.status == "Submitted"?
                            <Badge className="px-2 py-1">{assessment.status}</Badge>
                            :
                            dueDays(assessment.dueDate)
                            }
                        </TableCell>
                        <TableCell>
                        { assessment.status == "Due"?
                        <Button className="px-3 cursor-pointer">Start</Button>
                        :
                        assessment.status == "Submitted"?
                        <Button className="cursor-pointer">View Performance</Button>
                        :
                        <Button className="cursor-pointer">View Assignment</Button>
                        }
                        </TableCell>
                    </TableRow>
                    :
                    ""
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default AssessmentTable