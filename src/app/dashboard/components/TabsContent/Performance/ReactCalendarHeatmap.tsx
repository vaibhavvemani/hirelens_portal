'use client'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

type HeatmapValue = {
  date: string; // 'YYYY-MM-DD'
  count: number;
};

type ContributionHeatmapProps = {
  startDate: Date;
  endDate: Date;
  values: HeatmapValue[];
};

const getDateKey = (date: Date) => date.toISOString().split('T')[0];

const generateDateRange = (startDate: Date, endDate: Date): Date[] => {
  const dates = [];
  let current = new Date(startDate);
  while (current <= endDate) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
};

const ContributionHeatmap: React.FC<ContributionHeatmapProps> = ({ startDate, endDate, values }) => {
  const dateCounts: Record<string, number> = {};

  values.forEach(({ date, count }) => {
    dateCounts[date] = count;
  });

  const allDates = generateDateRange(startDate, endDate);

  // group dates by week
  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];

  allDates.forEach((date) => {
    if (date.getDay() === 0 && currentWeek.length > 0) {
      // new week (Sunday start)
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(date);
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const getColor = (count: number) => {
    if (count >= 10) return 'bg-green-600';
    if (count >= 7) return 'bg-green-500';
    if (count >= 4) return 'bg-green-400';
    if (count >= 1) return 'bg-green-300';
    return 'bg-gray-200';
  };

  return (
    <div className="flex gap-1">
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="flex flex-col gap-1">
          {/* days stacked vertically */}
          {Array.from({ length: 7 }).map((_, dayIndex) => {
            const date = week.find(d => d.getDay() === dayIndex);
            const key = date ? getDateKey(date) : `${weekIndex}-${dayIndex}`;
            const count = date ? (dateCounts[getDateKey(date)] || 0) : 0;
            const color = getColor(count);

            return (
              <div
                key={key}
                className={`w-4 h-4 rounded ${color} relative group`}
              >
                {/* Tooltip */}
                {date && (
                  <div className="absolute hidden group-hover:flex flex-col items-center bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                    {`${getDateKey(date)}: ${count} contributions`}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ContributionHeatmap;
