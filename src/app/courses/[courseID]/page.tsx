"use client";

import { useParams } from "next/navigation";
import { Course } from "@/types/courses";
import { SampleCourses } from "../sampleCourses";
import { Calendar, FileText, FolderOpen } from "lucide-react";
import CourseContent from "./CourseContent";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const page = () => {
  const params = useParams();
  const courseID = Number(params.courseID);
  const course = SampleCourses.find((course) => courseID === course.id);

  const getTotalFilesInCourse = (course: Course): number => {
    return course.modules.reduce(
      (totalFiles, module) => totalFiles + module.Files.length,
      0
    );
  };

  const getLastUpdatedDate = (course: Course): Date | null => {
    // Get all file upload dates from all modules
    const allFileDates = course.modules.flatMap(module => 
      module.Files.map(file => file.dateUploaded.getTime())
    );

    if (allFileDates.length === 0) return null;
    
    return new Date(Math.max(...allFileDates));
  };

  function formatRelativeTime(date: Date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60
    };
    
    for (const [unit, seconds] of Object.entries(intervals)) {
      const interval = Math.floor(diffInSeconds / seconds);
      if (interval >= 1) {
        return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
      }
    }
    
    return 'Just now';
  }

  if (!course) {
    return <div>404 Page Not Found</div>;
  }

  const lastUpdated = getLastUpdatedDate(course);

  return (
    <div className="w-full flex justify-center mt-4 overflow-hidden">
      <div className="flex flex-col flex-1 gap-3 max-w-[1300px] px-4 pb-3 overflow-hidden">
        <div className="flex flex-col border-b-2 pb-2">
          <h1 className="text-2xl font-extrabold">{course.name}</h1>
          <p className="font-medium text-base text-muted-foreground">
            {course.faculty}
          </p>
          <div className="flex flex-row mt-3 gap-7 text-muted-foreground font-medium">
            <p className="flex items-center gap-1 text-sm">
              <FolderOpen size={15} strokeWidth={2.5}/>
              {course.modules.length} Modules
            </p>
            <p className="flex items-center gap-1 text-sm">
              <FileText size={15} strokeWidth={2.5}/>
              {getTotalFilesInCourse(course)} files
            </p>
            <p className="flex items-center gap-1 text-sm">
              <Calendar size={15} strokeWidth={2.5}/>
              {lastUpdated ? `Last updated ${formatRelativeTime(lastUpdated)}` : 'No files yet'}
            </p>
          </div>
        </div>
        <CourseContent course={course}/>
      </div>
    </div>
  );
};

export default page;