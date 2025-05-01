import { Card } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay, isSameMonth, differenceInCalendarDays } from "date-fns";
import { scheduleItems } from "./SampleSchedule";
import type { ScheduleItem } from "./SampleSchedule";
import React from "react";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface MonthProps {
  range: [Date, Date];
}

const styleMap: Record<ScheduleItem["type"], string> = {
  assignment: "border-l-4 border-blue-300 bg-blue-50",
  application: "border-l-4 border-green-300 bg-green-50",
  drive: "border-l-4 border-yellow-300 bg-yellow-50",
  orientation: "border-l-4 border-purple-300 bg-purple-50",
  "assessment deadline": "border-l-4 border-red-300 bg-red-50",
};

const dotColorMap: Record<ScheduleItem["type"], string> = {
  assignment: "bg-blue-400",
  application: "bg-green-400",
  drive: "bg-yellow-400",
  orientation: "bg-purple-400",
  "assessment deadline": "bg-red-400",
};

const Month: React.FC<MonthProps> = ({ range }) => {
  const monthStart = startOfMonth(range[0]);
  const monthEnd = endOfMonth(range[1]);
  const daysInMonth = differenceInCalendarDays(monthEnd, monthStart) + 1;

  const days = [
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  ];

  function fillInMatrix(){
    let i=0;
    while(i<7){
      if(format(monthStart, "EEEE")===days[0][i]){
        break
      }
    }
    let x=0;
    
    while(x<daysInMonth+i){

    }
  }

  return (
    <Card className="gap-0 py-0 display flex justify-center">
      <Table>
        <TableHeader>
          <TableRow>
          <TableHead className="text-center">Sunday</TableHead>
          <TableHead className="text-center">Monday</TableHead>
          <TableHead className="text-center">Tuesday</TableHead>
          <TableHead className="text-center">Wednesday</TableHead>
          <TableHead className="text-center">Thursday</TableHead>
          <TableHead className="text-center">Friday</TableHead>
          <TableHead className="text-center">Saturday</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </Card>
  );
};

export default Month;