import { sampleDrives } from "./sampleDrives";
import { sampleStudent } from "./sampleStudent";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  ClockFading,
  Banknote,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DriveDialog from "./DriveDialog";

interface DrivesProps {
    type: "all" | "eligible" | "applied";
  }

const Drives = ({type}: DrivesProps) => {

// Checks if student has applied
const hasApplied = (driveId: number) => {
    return sampleStudent.optedDrives.some(opt => opt.driveId === driveId);
  };
  
  // Checks eligibility
  const isEligible = (drive: typeof sampleDrives[0]) => {
    const { tenth_grade, twelfth_grade, cgpa, departments } = drive.requirements;
    const student = sampleStudent.academicDetails;
  
    return (
      student.tenthGrade >= parseFloat(tenth_grade) &&
      student.twelfthGrade >= parseFloat(twelfth_grade) &&
      student.cgpa >= cgpa &&
      departments.includes(sampleStudent.department)
    );
  };

  const displayDrives = sampleDrives.filter((drive) => {
    if (type === "all") return true;
    if (type === "applied") return hasApplied(drive.driveID);
    if (type === "eligible") return isEligible(drive) && !hasApplied(drive.driveID);
    return false;
  });
  


  return (
    <div>
      <div className="flex flex-col mt-4 gap-3">
        {displayDrives.map((drive, index) => (
          <Card key={index} className="flex p-2 gap-0">
            <div className="flex w-full p-2 justify-between items-start">
              <div className="flex gap-3">
                <Image
                  src={"/default.png"} // use drive.logo here
                  alt={drive.company}
                  width={50}
                  height={50}
                  className="object-contain rounded-md"
                />
                <div className="flex flex-col justify-center whitespace-nowrap">
                  <div className="flex gap-3 items-center">
                    <CardTitle className="text-xl">{drive.role}</CardTitle>
                    <Badge className="h-fit rounded-2xl">{drive.type}</Badge>
                  </div>
                  <CardDescription className="p-0 font-bold text-base text-muted-foreground">
                    {drive.company}
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground font-semibold">
                <Calendar size={15} strokeWidth={2.5} />
                <p>
                  Interview Date:{" "}
                  {new Date(drive.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  })}
                </p>
              </div>
            </div>
            <div className="flex justify-between p-2 text-accent-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={20} strokeWidth={2} />
                <p className="font-semibold">{drive.location}</p>
              </div>
              <div className="flex items-center gap-2 text-accent-foreground">
                <ClockFading size={20} strokeWidth={2} />
                <p className="font-semibold">
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
              <p className="p-2 font-medium text-base">{drive.jobdesc}</p>
            </div>
            <div className="flex justify-between items-center p-2">
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
              <div className="flex gap-3">
                <DriveDialog drive={drive}/>
                <Button>Opt in</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Drives;
