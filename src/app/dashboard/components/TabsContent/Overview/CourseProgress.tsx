import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

const courseProgressData = [
  { courseName: "Web Development Fundamentals", progress: 85 },
  { courseName: "Data Structures & Algorithms", progress: 62 },
  { courseName: "Machine Learning Basics", progress: 38 },
  { courseName: "UI/UX Design Principles", progress: 100 },
];

interface CourseProgressItemProps {
  courseName: string;
  progress: number;
}

const CourseProgressItem = ({
  courseName,
  progress,
}: CourseProgressItemProps) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="font-medium">{courseName}</span>
      </div>
      <span className="text-sm text-muted-foreground">{progress}%</span>
    </div>
    <Progress value={progress} className="h-2" />
  </div>
);

const CourseProgress = () => {
  return (
    <Card className="lg:col-span-4">
      <CardHeader>
        <CardTitle>Course Progress</CardTitle>
        <CardDescription>
          Your progress across all enrolled courses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courseProgressData.map((course, index) => (
            <CourseProgressItem
              key={index}
              courseName={course.courseName}
              progress={course.progress}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseProgress;
