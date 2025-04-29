"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

type HeatmapValue = {
  date: string; // 'YYYY-MM-DD'
  count: number;
};

type ContributionHeatmapProps = {
  startDate: Date;
  endDate: Date;
  values: HeatmapValue[];
};

const getDateKey = (date: Date) => date.toISOString().split("T")[0];

const generateDateRange = (startDate: Date, endDate: Date): Date[] => {
  const dates = [];
  let current = new Date(startDate);
  while (current <= endDate) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
};

const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ContributionHeatmap: React.FC<ContributionHeatmapProps> = ({
  startDate,
  endDate,
  values,
}) => {
  const dateCounts: Record<string, number> = {};
  values.forEach(({ date, count }) => {
    dateCounts[date] = count;
  });

  const allDates = generateDateRange(startDate, endDate);

  // pad the beginning so first date is a Sunday
  while (allDates[0].getDay() !== 0) {
    const prev = new Date(allDates[0]);
    prev.setDate(prev.getDate() - 1);
    allDates.unshift(prev);
  }

  // group by weeks
  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];
  allDates.forEach((date) => {
    if (date.getDay() === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(date);
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const getColor = (count: number) => {
    if (count >= 10) return "bg-green-600";
    if (count >= 7) return "bg-green-500";
    if (count >= 4) return "bg-green-400";
    if (count >= 1) return "bg-green-300";
    return "bg-gray-200";
  };

  // generate month labels
  const monthLabels: { label: string; colStart: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, index) => {
    const firstDay = week[0];
    if (firstDay && firstDay.getMonth() !== lastMonth) {
      monthLabels.push({
        label: firstDay.toLocaleString("default", { month: "short" }),
        colStart: index,
      });
      lastMonth = firstDay.getMonth();
    }
  });

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex flex-col gap-2">
        {/* Month labels */}
        <div className="flex ml-8 gap-1 text-xs text-muted-foreground font-bold">
          {weeks.map((_, index) => {
            const label = monthLabels.find((m) => m.colStart === index)?.label;
            return (
              <div key={index} className="w-4 text-center">
                {label || ""}
              </div>
            );
          })}
        </div>

        <div className="flex">
          {/* Day labels */}
          <div className="flex flex-col gap-1 mr-2 text-xs text-muted-foreground">
            {dayLabels.map((label) => (
              <div key={label} className="h-4 w-6 text-right pr-1">
                {label}
              </div>
            ))}
          </div>

          {/* Heatmap */}
          <div className="flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const date = week.find((d) => d.getDay() === dayIndex);
                  const key = date ? getDateKey(date) : `${weekIndex}-${dayIndex}`;
                  const count = date ? dateCounts[getDateKey(date)] || 0 : 0;
                  const color = getColor(count);

                  return (
                    <TooltipProvider key={key}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className={`w-4 h-4 rounded ${color} relative group`}
                          ></div>
                        </TooltipTrigger>
                        <TooltipContent>
                          {date
                            ? `${getDateKey(date)}: ${count} contributions`
                            : "No data"}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionHeatmap;
