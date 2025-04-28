import { Card } from "@/components/ui/card";

import CourseProgress from "./Overview/CourseProgress";
import Activities from "./Overview/Activities";

import {
  BookOpen,
  NotebookPen,
  ChartColumnIncreasing,
  ChartPie,
} from "lucide-react";
import Deadlines from "./Overview/DeadLines";
import Resources from "./Overview/Resources";

const stats = [
  {
    title: "Courses Started",
    value: "6",
    description: "2 in progress, 4 completed",
    icon: BookOpen,
  },
  {
    title: "Assignments",
    value: "10",
    description: "3 in progress, 7 completed",
    icon: NotebookPen,
  },
  {
    title: "Average Score",
    value: "87%",
    description: "+2.5% from last month",
    icon: ChartColumnIncreasing,
  },
  {
    title: "Study Time",
    value: "24h",
    description: "This week",
    icon: ChartPie,
  },
];

const Overview = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full justify-between space-x-4 mt-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="flex-1 flex flex-col gap-2 px-5 py-6">
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold leading-none">{stat.title}</p>
                <Icon size={15} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-extrabold text-2xl">{stat.value}</h3>
                <p className="text-muted-foreground font-semibold text-xs">
                  {stat.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <CourseProgress />
      <Deadlines />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Activities />
      <Resources />
      </div>
    </div>
  );
};

export default Overview;
