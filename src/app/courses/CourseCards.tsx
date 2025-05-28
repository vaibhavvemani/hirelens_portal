import { SamplesCourses } from "./sampleCourses";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, File } from "lucide-react";

const CourseCards = () => {
  return (
    <div className="flex flex-col gap-4 pb-6">
      <div className="flex items-center gap-2">
        <BookOpen size={20} />
        <h1 className="text-lg font-bold">Course Documents</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {SamplesCourses.map((course) => {
          const overallProgress =
            course.modules.reduce((sum, module) => sum + module.progress, 0) /
            course.modules.length;

          return (
            <Card key={course.id} className="w-full p-4 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0 pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold">{course.title}</CardTitle>
                    <CardDescription className="text-sm font-bold text-muted-foreground">
                      {course.professor}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{Math.round(overallProgress)}%</p>
                    <p className="text-xs text-gray-500">Complete</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0 pb-3">
                <div className="space-y-3">
                  <div className="flex h-2 bg-gray-200 rounded-full overflow-hidden">
                    {course.modules.map((module, index) => (
                      <div
                        key={index}
                        className={`flex-1 ${
                          module.progress === 100
                            ? "bg-green-500"
                            : module.progress > 0
                            ? "bg-blue-500"
                            : "bg-gray-200"
                        } ${index > 0 ? "border-l border-white" : ""}`}
                        style={{
                          background:
                            module.progress > 0 && module.progress < 100
                              ? `linear-gradient(to right, #3b82f6 ${module.progress}%, #e5e7eb ${module.progress}%)`
                              : undefined,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    {course.modules.map((module, index) => (
                      <p
                        key={index}
                        className="truncate max-w-[60px] font-bold"
                        title={module.name}
                      >
                        M{index + 1}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-0 flex justify-between items-center">
                <div className="flex items-center gap-1 text-gray-500">
                  <File size={14} />
                  <span className="text-sm">{course.documentCount} documents</span>
                </div>
                <span className="text-sm text-gray-500">Updated {course.lastUpdated}</span>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCards;