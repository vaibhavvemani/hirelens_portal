import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import {
    FileText,
    BookOpen,
    MessageSquare,
    Code2,
  } from "lucide-react";
  
  
  // Data for recent activities and recommended resources
  const recentActivitiesData = [
    { icon: FileText, title: "Submitted Assignment: CSS Layouts", time: "Today at 10:30 AM" },
    { icon: BookOpen, title: "Completed Lesson: React Hooks", time: "Yesterday at 3:45 PM" },
    { icon: MessageSquare, title: "Posted in Discussion: API Design", time: "Yesterday at 1:20 PM" },
    { icon: Code2, title: "Coding Exercise: Sorting Algorithms", time: "April 22 at 5:30 PM" },
  ];
  
  interface RecentActivityItemProps {
    icon: React.ElementType;
    title: string;
    time: string;
  }

  const RecentActivityItem = ({ icon: Icon, title, time }: RecentActivityItemProps) => (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
  
  const Activities = () => {
    return (
      
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your latest learning activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivitiesData.map((activity, index) => (
                <RecentActivityItem
                  key={index}
                  icon={activity.icon}
                  title={activity.title}
                  time={activity.time}
                />
              ))}
            </div>
          </CardContent>
        </Card>
    );
  };
  
  export default Activities;
  