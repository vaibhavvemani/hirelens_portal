import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  differenceInCalendarMonths,
  getDay,
} from "date-fns";
import { scheduleItems } from "./SampleSchedule";
import type { ScheduleItem } from "./SampleSchedule";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

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

const Month: React.FC<MonthProps> = ({ range }) => {
  const [months, setMonths] = useState<Date[]>([]);

  useEffect(() => {
    const [start, end] = range;
    const monthCount = differenceInCalendarMonths(end, start) + 1;
    const monthsArray: Date[] = [];

    for (let i = 0; i < monthCount; i++) {
      monthsArray.push(addMonths(start, i));
    }

    setMonths(monthsArray);
  }, [range]);

  const generateCalendarMatrix = (month: Date) => {
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(month);
    const startDayIndex = getDay(monthStart);

    const daysInMonth = eachDayOfInterval({
      start: monthStart,
      end: monthEnd,
    });

    const matrix: (Date | null)[][] = [];
    let week: (Date | null)[] = [];

    // Add nulls for days before the start of the month
    for (let i = 0; i < startDayIndex; i++) {
      week.push(null);
    }

    // Add days of the month
    for (const day of daysInMonth) {
      week.push(day);
      if (week.length === 7) {
        matrix.push(week);
        week = [];
      }
    }

    // Add nulls for days after the end of the month
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }
      matrix.push(week);
    }

    return matrix;
  };

  return (
    <div className="flex flex-col gap-8">
      {months.map((month, monthIndex) => {
        const calendarMatrix = generateCalendarMatrix(month);

        return (
          <Card key={monthIndex} className="gap-0 py-0 overflow-hidden">
            <Table className="w-full table-fixed overflow-hidden">
              <TableHeader>
                <TableRow>
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <TableHead key={day} className="text-center p-2">
                        {day}
                      </TableHead>
                    )
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {calendarMatrix.map((week, weekIdx) => (
                  <TableRow key={weekIdx}>
                    {week.map((day, dayIdx) => {
                      const events = scheduleItems.filter(
                        (item) => day && isSameDay(item.dueDate, day)
                      );

                      return (
                        <TableCell
                          key={dayIdx}
                          className={`align-top h-32 w-1/7 ${
                            day && !isSameMonth(day, month) ? "opacity-30" : ""
                          }`}
                        >
                          {day ? (
                            <div className="flex flex-col gap-1 h-full p-2">
                              <div className="text-xs font-semibold">
                                {format(day, "d")}
                              </div>
                              <div className="flex-1">
                                <TooltipProvider>
                                  {events.map((event) => (
                                    <Tooltip key={event.id}>
                                      <TooltipTrigger asChild>
                                        <div
                                          className={`p-1 rounded-md text-xs cursor-pointer mb-1 whitespace-normal break-words ${
                                            styleMap[event.type]
                                          }`}
                                        >
                                          {event.title}
                                        </div>
                                      </TooltipTrigger>
                                      <TooltipContent
                                        side="top"
                                        className="max-w-[250px] flex flex-col gap-1 pb-2"
                                      >
                                        <p className="font-semibold text-sm">
                                          {event.title}
                                        </p>
                                        <p className="text-xs">
                                          {event.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-muted text-xs">
                                          <CalendarClock size={12} />
                                          <p>
                                            {format(
                                              event.dueDate,
                                              "MMMM d, yyyy"
                                            )}
                                          </p>
                                        </div>
                                        {event.notes && (
                                          <p className="font-bold text-xs">
                                            Notes: {event.notes}
                                          </p>
                                        )}
                                      </TooltipContent>
                                    </Tooltip>
                                  ))}
                                </TooltipProvider>
                              </div>
                            </div>
                          ) : (
                            <div className="text-muted-foreground text-xs w-full h-full bg-muted">
                            </div>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        );
      })}
    </div>
  );
};

export default Month;
