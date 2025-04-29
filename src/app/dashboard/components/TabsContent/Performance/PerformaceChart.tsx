"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", score: 70 },
  { month: "February", score: 75 },
  { month: "March", score: 80 },
  { month: "April", score: 85 },
  { month: "May", score: 90 },
  { month: "June", score: 95 },
  { month: "July", score: 100 },
  { month: "August", score: 95 },
  { month: "September", score: 90 },
  { month: "October", score: 85 },
  { month: "November", score: 80 },
  { month: "December", score: 10 },
];

// Chart Config
const chartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--chart-1))", // Use a CSS variable defined in your Tailwind config
  },
} satisfies ChartConfig;

export function PerformanceChart() {
  return (
    <Card>
      <CardContent className="h-[300px]">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 20, left: 20, bottom: 0 }} // ⬅️ increased `left` from 0 to 20
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                tickFormatter={(val) => val.slice(0, 3)}
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis hide />
              <RechartsTooltip
                cursor={{ fill: "transparent" }}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke={
                  chartData[chartData.length - 1].score >
                  chartData[chartData.length - 2].score
                    ? "#10B981"
                    : "#EF4444"
                }
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div
          className={`flex gap-2 font-medium leading-none ${
            chartData[chartData.length - 1].score >
            chartData[chartData.length - 2].score
              ? "text-green-800"
              : "text-red-600"
          }`}
        >
          Performance
          {chartData[chartData.length - 1].score >
          chartData[chartData.length - 2].score
            ? " up"
            : " down"}{" "}
          by
          {" " +
            Math.abs(
              ((chartData[chartData.length - 1].score -
                chartData[chartData.length - 2].score) /
                chartData[chartData.length - 2].score) *
                100
            ).toFixed(1)}
          % this month
          {chartData[chartData.length - 1].score >
          chartData[chartData.length - 2].score ? (
            <TrendingUp className="h-4 w-4" color="green" />
          ) : (
            <TrendingDown className="h-4 w-4" color="red" />
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Showing average scores for for 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
