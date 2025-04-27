import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "@/components/ui/card";
  
  import {
    FileText,
    BookOpen,
    MessageSquare,
    Code2,
    Icon,
  } from "lucide-react";
  
  import { Button } from "@/components/ui/button";
  import Image from "next/image";
  
  // Data for recent activities and recommended resources
  const recentActivitiesData = [
    { icon: FileText, title: "Submitted Assignment: CSS Layouts", time: "Today at 10:30 AM" },
    { icon: BookOpen, title: "Completed Lesson: React Hooks", time: "Yesterday at 3:45 PM" },
    { icon: MessageSquare, title: "Posted in Discussion: API Design", time: "Yesterday at 1:20 PM" },
    { icon: Code2, title: "Coding Exercise: Sorting Algorithms", time: "April 22 at 5:30 PM" },
  ];
  
  const recommendedResourcesData = [
    { src: "/placeholder.svg?height=40&width=40", alt: "JavaScript Book", title: "Advanced JavaScript Patterns", rating: "4.8 ★", type: "eBook" },
    { src: "/placeholder.svg?height=40&width=40", alt: "Algorithm Course", title: "Algorithm Visualization Tools", rating: "4.6 ★", type: "Interactive" },
    { src: "/placeholder.svg?height=40&width=40", alt: "Design Course", title: "Responsive Design Workshop", rating: "4.9 ★", type: "Video Course" },
  ];

  interface RecentActivityItemProps {
    icon: React.ElementType;
    title: string;
    time: string;
  }

  interface recommendedResourceProps{
    src: string,
    alt: string,
    title: string,
    rating: string,
    type: string
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
  
  const RecommendedResourceItem = ({ src, alt, title, rating, type }: recommendedResourceProps) => (
    <div className="flex items-center gap-4">
      <Image
        src={src}
        width={40}
        height={40}
        alt={alt}
        className="rounded-md object-cover"
      />
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-xs text-muted-foreground">{type} • {rating}</p>
      </div>
    </div>
  );
  
  const Activities = () => {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
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
  
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recommended Resources</CardTitle>
            <CardDescription>Based on your current courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedResourcesData.map((resource, index) => (
                <RecommendedResourceItem
                  key={index}
                  src={resource.src}
                  alt={resource.alt}
                  title={resource.title}
                  rating={resource.rating}
                  type={resource.type}
                />
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Resources
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };
  
  export default Activities;
  