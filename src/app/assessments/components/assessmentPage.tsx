import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SampleAssessment from "./SampleAssessments";
import sampleAssignedTests from "./SampleStudent";
import { Card } from "@/components/ui/card";
import { sampleTestsTaken } from "./SampleStudent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import formatDueDate from "@/app/dashboard/components/TabsContent/Assessments/FormatDueDate";
import Link from "next/link";
import { Tooltip, TooltipProvider, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

interface AssessmentPageProps {
  value: string;
}
function returnAllTests() {
  return sampleAssignedTests.assignedTests;
}

function returnPendingAssignments() {
  let tests = sampleAssignedTests.assignedTests
    .filter((test) => test.status === "pending")
    .filter((test) => test.dueDate >= new Date());
  return tests;
}

function returnOverdueAssignments() {
  let tests = sampleAssignedTests.assignedTests
    .filter((test) => test.status === "pending")
    .filter((test) => test.dueDate < new Date());
  return tests;
}

function returnSubmittedAssignments() {
  let tests = sampleAssignedTests.assignedTests.filter(
    (test) => test.status === "completed"
  );
  return tests;
}

const AssessmentPage: React.FC<AssessmentPageProps> = ({ value }) => {
  const tests =
    value == "all"
      ? returnAllTests()
      : value == "pending"
      ? returnPendingAssignments()
      : value == "overdue"
      ? returnOverdueAssignments()
      : returnSubmittedAssignments();

  return (
    <Card className="flex flex-col mt-3 px-3 py-2">
      <Table>
        {value !== "all" ? (
          <TableCaption>{`List of your ${value} assignments`}</TableCaption>
        ) : (
          <TableCaption>{`List of ${value} your assignments`}</TableCaption>
        )}
        <TableHeader>
          <TableRow className="justify-between">
            <TableHead className="w-1/5">Test</TableHead>
            <TableHead className="w-1/4 text-right">Due Date</TableHead>
            <TableHead className="w-1/4 text-right">Status</TableHead>
            <TableHead className="w-1/4 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tests.map((test) => (
            <TableRow key={test.testUid}>
              <TableCell className="w-1/5 py-2 pl-2">
                {
                  <div className="flex flex-col">
                    <p className="text-base font-medium">
                      {SampleAssessment.tests[test.testUid].name.replace(
                        /_/g,
                        " "
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground font-semibold">
                      {SampleAssessment.tests[test.testUid].desc}
                    </p>
                  </div>
                }
              </TableCell>
              <TableCell className="w-1/4 py-2 text-right">
                {formatDueDate(test.dueDate)}
              </TableCell>
              <TableCell className="w-1/4 py-2 text-right">
                {new Date() > test.dueDate && test.status != "completed" ? (
                  <Badge className="bg-red-400 px-2 py-1">Overdue</Badge>
                ) : test.status === "completed" ? (

                    <div className="">

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                          <Badge className="bg-green-400 px-2 py-1">
                        {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
                      </Badge>
                      
                          </TooltipTrigger>
                          
                          <TooltipContent className="text-sm p-2 rounded-md shadow-lg">
                            {(() => {
                              const takenTest = sampleTestsTaken.testsTaken.find(
                                (testTaken) => testTaken.testUid === test.testUid
                              );
                              const totalQuestions =
                                SampleAssessment.tests[test.testUid.toString()]?.questionIds.length;
                    
                              return takenTest
                                ? `Score: ${takenTest.score} / ${totalQuestions}`
                                : "Not Attempted";
                            })()}
                          </TooltipContent>
                          </Tooltip>
                      </TooltipProvider>
                    </div>
                    
                ) : (
                  <Badge className="bg-blue-400 px-2 py-1">
                    {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
                  </Badge>
                )}
              </TableCell>
              <TableCell className="w-1/4 py-2 pr-2 text-right">
                {value === "submitted" || new Date() > test.dueDate ? (
                  <Button>View</Button>
                ) : (
                  <Link
                    href={`/tests/${test.testUid}`}
                    className="cursor-pointer"
                  >
                    <Button>Attempt</Button>
                  </Link>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default AssessmentPage;
