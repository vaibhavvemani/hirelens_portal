import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";


const coursesData = [
  {
    status: "In Progress",
    image: "/default.png",
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS and JavaScript basics",
    level: "Level 1",
    completion: 85,
  },
  {
    status: "Completed",
    image: "/default.png",
    title: "Data Structures & Algorithms",
    description: "Master core concepts of DSA",
    level: "Level 2",
    completion: 100,
  },
  {
    status: "In Progress",
    image: "/default.png",
    title: "Machine Learning Basics",
    description: "Introduction to machine learning models",
    level: "Level 1",
    completion: 40,
  },
  {
    status: "In Progress",
    image: "/default.png",
    title: "UI/UX Design Principles",
    description: "Understand the fundamentals of good design",
    level: "Level 1",
    completion: 65,
  },
];


function organiseData() {
  const inProgress = coursesData
    .filter(course => course.completion < 100)
    .sort((a, b) => b.completion - a.completion);

  const completed = coursesData.filter(course => course.completion === 100);

  return [...inProgress, ...completed];
}


const Courses = () => {
  const organisedCourses = organiseData();

  return (
    <div className="flex flex-col mt-3  w-full">
      <h1 className="text-xl font-bold">My Courses</h1>
      <p className="text-sm font-semibold text-muted-foreground">
        Manage and track the courses you've started
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(275px,1fr))] gap-6 mt-5 w-full">
        {organisedCourses.map((course, index) => (
          <Card
          className="flex flex-col p-5 justify-between transition-all"
            key={index}>
            <Badge className="self-start">{course.status}</Badge>
            <Image
              src={course.image}
              alt={course.title}
              width={240}
              height={140}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col gap-2 mt-2 ">
              <p className="font-extrabold text-lg leading-tight">{course.title}</p>
              <p className="font-semibold text-muted-foreground text-sm leading-tight">
                {course.description}
              </p>
            </div>
            <div className="flex justify-between w-full mt-3">
              <p className="font-bold">{course.level}</p>
              <p className="font-bold">{course.completion}% Complete</p>
            </div>
            <Progress value={course.completion} className="w-full mt-2" />
            <Button className="mt-4 w-full">Continue Learning</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
