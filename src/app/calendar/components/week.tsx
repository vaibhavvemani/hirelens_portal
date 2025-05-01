import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalendarClock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { format, eachDayOfInterval, isSameDay } from "date-fns";
import { scheduleItems } from "./SampleSchedule";
import type { ScheduleItem } from "./SampleSchedule";

interface WeekProps {
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

const Week: React.FC<WeekProps> = ({ range }) => {
  const days = eachDayOfInterval({ start: range[0], end: range[1] });

  const eventsByDate: Record<string, ScheduleItem[]> = {};
  days.forEach((day) => {
    const key = day.toDateString();
    eventsByDate[key] = scheduleItems.filter((item) =>
      isSameDay(item.dueDate, day)
    );
  });

  return (
    <div className="flex flex-col">
      <Card className="p-4 overflow-x-auto">
        <Table className="w-full table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4">Date</TableHead>
              <TableHead>Events</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {days.map((day) => {
              const key = day.toDateString();
              const events = eventsByDate[key] || [];

              return (
                <TableRow key={key}>
                  <TableCell className="font-medium">
                    {format(day, "EEEE, MMM d")}
                  </TableCell>
                  <TableCell>
                    {events.length > 0 ? (
                      <div className="flex flex-col gap-2">
                        <TooltipProvider>
                          {events.map((event) => (
                            <Tooltip key={event.id}>
                              <TooltipTrigger asChild>
                                <div
                                  className={`p-2 rounded-md text-sm cursor-pointer ${styleMap[event.type]}`}
                                >
                                  {event.title}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent 
                                side="top" 
                                className="max-w-[450px] flex flex-col gap-1 pb-3"
                              >
                                <div className="flex items-center gap-2">
                                  <span 
                                    className={`w-2 h-2 rounded-full ${dotColorMap[event.type]}`}
                                  />
                                  <p className="font-semibold text-base">{event.title}</p>
                                </div>
                                <p className="text-xs">{event.description}</p>
                                <div className="flex gap-2 text-muted">
                                  <CalendarClock size={15}/>
                                  <p className="font-bold">
                                    {format(event.dueDate, "MMMM d, yyyy")}
                                  </p>
                                </div>
                                {event.notes && (
                                  <p className="font-bold text-xs">Notes: {event.notes}</p>
                                )}
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </TooltipProvider>
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground py-2 bg-muted w-fit px-3 rounded-lg">
                        No tasks
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Week;