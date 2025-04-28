import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Award, CheckCircle, Flame, Medal } from "lucide-react";

const Performance = () => {
  const stats = [
    {
      title: "Current CGPA",
      value: 9.22,
      caption: "+0.2 from last month",
      icon: Award,
    },
    {
      title: "Completion Rate",
      value: 92,
      caption: "assessments submitted on time",
      icon: CheckCircle,
    },
    { title: "Study Streak", value: 14, caption: "keep it up", icon: Flame },
    {
      title: "Assessments Taken",
      value: 40,
      caption: "10 taken this month",
      icon: Medal,
    },
  ];

  const testCount = [
    { month: "January", tests: 45 },
    { month: "February", tests: 50 },
    { month: "March", tests: 55 },
    { month: "April", tests: 40 },
    { month: "May", tests: 35 },
    { month: "June", tests: 50 },
    { month: "July", tests: 45 },
    { month: "August", tests: 55 },
    { month: "September", tests: 40 },
    { month: "October", tests: 35 },
    { month: "November", tests: 50 },
    { month: "December", tests: 45 },
  ];

  const testScores = [
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
    { month: "December", score: 75 },
  ];

  return (
    <div className="flex flex-col mt-3 w-full">
      <h1 className="text-xl font-bold">Performance analytics</h1>
      <p className="text-sm font-semibold text-muted-foreground">
        Track your academic progress and achievements
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-5">
        {stats.map((stat) => (
          <Card className="p-5" key={stat.title}>
            <div className="flex flex-col gap-3">
              <div className="flex">
                <CardTitle>{stat.title}</CardTitle>
                <stat.icon
                  className="ml-auto text-muted-foreground"
                  size={15}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.caption}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <div className="flex flex-col">
            <CardHeader>
              <CardTitle>Tests Taken</CardTitle>
              <CardDescription>
                Number of assessments taken in the last 6 months
              </CardDescription>
            </CardHeader>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Performance;
