import { BellRing } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { sampleAssignments } from "./sampleAssignments";

const AssignmentReminders = () => {
  const today = new Date();

  // Filter only future assignments and sort by due date descending (latest first)
  const upcomingAssignments = sampleAssignments
    .filter((assignment) => new Date(assignment.dueDate) > today)
    .sort(
      (a, b) =>
        new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    );

  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center gap-2">
        <BellRing size={20}/>
        <h1 className="text-lg font-bold">Assignment Reminders</h1>
      </div>
      <div className="flex overflow-x-auto gap-4 pb-2 hide-scroller">
        {upcomingAssignments.length > 0 ? (
          upcomingAssignments.map((assignment) => (
            <Card key={assignment.id} className="w-[400px] p-3 flex-shrink-0">
              <CardHeader className="p-0 gap-0">
                <div className="flex flex-row justify-between">
                  <CardTitle className="text-lg">{assignment.title}</CardTitle>
                  <Badge>{assignment.type}</Badge>
                </div>
                <CardDescription className="font-medium">
                  {assignment.professor}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 gap-0 min-h-[80px]">
                <p className="text-wrap text-sm">{assignment.description}</p>
              </CardContent>
              <CardFooter className="w-full flex gap-4 p-0 border-t-2 pt-2 mt-2">
                <div className="flex-2 flex-col">
                  <p className="text-left text-sm font-medium">
                    Due date: {new Date(assignment.dueDate).toDateString()}
                  </p>
                  <p className="text-left text-sm font-medium">
                    Total Marks: {assignment.marks}
                  </p>
                </div>
                <Button className="flex-1 cursor-pointer">View</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>No Upcoming Assignments</p>
        )}
      </div>
    </div>
  );
};

export default AssignmentReminders;
