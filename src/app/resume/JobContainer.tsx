import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sampleDrives } from "../drives/sampleDrives";
import {
  Banknote,
  Briefcase,
  Clock,
  ClockFading,
  MapPin,
  SeparatorVertical,
} from "lucide-react";
import resumes from "./resumes";
import PDFThumbnail from "./PDFThumbnail";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import JobResumeDialog from "./JobResumeDialog";

const JobContainer = () => {
  return (
    <Card className="px-4 py-3 pb-4">
      <CardHeader className="p-0 gap-0">
        <div className="flex items-center gap-1">
          <Briefcase strokeWidth={2} size={20} />
          <CardTitle className="text-xl font-semibold">Your Drives</CardTitle>
        </div>
        <CardDescription className="font-medium">
          Update your resume and tailor it to specific job roles.
        </CardDescription>
      </CardHeader>
      {sampleDrives.map((drive, index) => (
        <Card key={index} className="px-3 py-2 flex flex-row justify-between">
          <div className="flex-7 flex flex-col justify-between">
            <CardHeader className="p-0 gap-0 leading-tight">
              <div className="flex gap-2 items-center">
                <Image
                  src={drive.logo}
                  alt={drive.company}
                  width={35}
                  height={35}
                  className="object-contain rounded-md"
                />
                <CardTitle className="flex gap-2 p-0 text-xl font-medium">
                  <p>{drive.company}</p>
                  <p>•</p>
                  <p>{drive.role}</p>
                </CardTitle>
                <Badge className="ml-4 text-xs px-2 py-0 h-fit">
                  {drive.type}
                </Badge>
              </div>
            </CardHeader>
            <div className="flex justify-between text-accent-foreground mt-1">
              <div className="flex items-center gap-1">
                <MapPin size={15} strokeWidth={2} />
                <p className="font-semibold text-sm">{drive.location}</p>
              </div>
              <div className="flex items-center gap-1 text-accent-foreground">
                <ClockFading size={15} strokeWidth={2} />
                <p className="font-semibold text-sm">
                  Application deadline:{" "}
                  {new Date(drive.lastday).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  })}
                </p>
              </div>
            </div>
            <div>
              <p className="font-medium text-sm mt-2">{drive.jobdesc}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3">
                <div className="flex items-center gap-1 bg-accent px-2 py-1 rounded-md">
                  <Clock size={15} strokeWidth={2} />
                  <p className="text-sm font-semibold">{drive.duration}</p>
                </div>
                <div className="flex items-center gap-1 bg-accent px-2 py-1 rounded-md">
                  <Banknote size={15} strokeWidth={2} />
                  <p className="text-sm font-semibold">{drive.salary}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-3 gap-2 min-w-[370px] justify-start">
            {resumes.map((resume, i) => (
              <Dialog key={i}>
                <DialogTrigger key={i} asChild>
                  <div className="cursor-pointer w-full">
                    <PDFThumbnail fileUrl={resume.file} />
                  </div>
                </DialogTrigger>
                <DialogContent className="gap-2 min-w-fit">
                  <DialogTitle>Resume Analyser</DialogTitle>
                  <JobResumeDialog resume={resume} drive={drive}/>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </Card>
      ))}
    </Card>
  );
};

export default JobContainer;
