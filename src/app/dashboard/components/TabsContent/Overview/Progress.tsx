import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import {
    FileText,
    Calendar,
    MessagesSquare,
  } from "lucide-react";
  
  import { Progress } from "@/components/ui/progress";
  import { Badge } from "@/components/ui/badge";
  
  const courseProgressData = [
    { courseName: "Web Development Fundamentals", progress: 85 },
    { courseName: "Data Structures & Algorithms", progress: 62 },
    { courseName: "Machine Learning Basics", progress: 38 },
    { courseName: "UI/UX Design Principles", progress: 100 },
  ];
  
  const upcomingDeadlinesData = [
    { icon: Calendar, title: "JavaScript Final Project", dueDate: "2 days", priority: "High" },
    { icon: FileText, title: "Database Design Quiz", dueDate: "3 days", priority: "Medium" },
    { icon: MessagesSquare, title: "Discussion Post: AI Ethics", dueDate: "5 days", priority: "Medium" },
  ];
  
  interface CourseProgressItemProps {
    courseName: string;
    progress: number;
  }
  
  interface UpcomingDeadlineItemProps {
    icon: React.ElementType;
    title: string;
    dueDate: string;
    priority: string;
  }
  
  const CourseProgressItem = ({ courseName, progress }: CourseProgressItemProps) => (
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
  
  const UpcomingDeadlineItem = ({ icon: Icon, title, dueDate, priority }: UpcomingDeadlineItemProps) => (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-xs text-muted-foreground">Due in {dueDate}</p>
      </div>
      <Badge className="ml-auto" variant={priority === 'High' ? undefined : 'outline'}>
        {priority}
      </Badge>
    </div>
  );
  
  const ProgressCard = () => {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
            <CardDescription>Your progress across all enrolled courses</CardDescription>
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
  
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Assignments due in the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlinesData.map((deadline, index) => (
                <UpcomingDeadlineItem
                  key={index}
                  icon={deadline.icon}
                  title={deadline.title}
                  dueDate={deadline.dueDate}
                  priority={deadline.priority}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default ProgressCard;
  