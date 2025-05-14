import { Drive } from "@/types/drives"
import { Card } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  ClockFading,
  Briefcase,
  Building,
  Banknote,
  Globe,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DriveDialog = ({ drive }: { drive: Drive }) => {
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button className="cursor-pointer">View Details</Button>
    </DialogTrigger>
    <DialogContent className="gap-0 flex flex-col min-w-[900px] h-[600px] overflow-y-auto pb-3 hide-scroller">
      <div className="flex flex-col gap-0">
        <DialogTitle className="text-2xl">
          {drive.role}
        </DialogTitle>
        <DialogDescription className="text-lg font-medium">
          {drive.company}
        </DialogDescription>
      </div>

      <div className="grid grid-cols-2 mt-5 gap-3">
        <Card className="flex flex-col px-4 py-2 items-start gap-0 rounded-md justify-around">
          <div className="flex items-center gap-2">
            <Calendar size={15} strokeWidth={2.5} />
            <p className="text-base font-semibold leading-snug">
              Interview date
            </p>
          </div>
          <p className="text-lg ml-6 font-semibold text-muted-foreground">
            {new Date(drive.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </p>
        </Card>
        <Card className="flex flex-col px-4 py-2 items-start gap-0 rounded-md justify-around">
          <div className="flex items-center gap-2">
            <MapPin size={15} strokeWidth={2.5} />
            <p className="text-base font-semibold leading-snug">
              Location
            </p>
          </div>
          <p className="text-lg ml-6 font-semibold text-muted-foreground">
            {drive.location}
          </p>
        </Card>
        <Card className="flex flex-col px-4 py-2 items-start gap-0 rounded-md justify-around">
          <div className="flex items-center gap-2">
            <Briefcase size={15} strokeWidth={2.5} />
            <p className="text-base font-semibold leading-snug">
              Job Type
            </p>
          </div>
          <p className="text-lg ml-6 font-semibold text-muted-foreground">
            {drive.type}
          </p>
        </Card>
        <Card className="flex flex-col px-4 py-2 items-start gap-0 rounded-md justify-around">
          <div className="flex items-center gap-2">
            <ClockFading size={15} strokeWidth={2.5} />
            <p className="text-base font-semibold leading-snug">
              Application Deadline
            </p>
          </div>
          <p className="text-lg ml-6 font-semibold text-muted-foreground">
            {new Date(drive.lastday).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </p>
        </Card>
      </div>

      <Tabs defaultValue="description" className="mt-4">
        <TabsList className="grid w-full grid-cols-3 mb-2">
          <TabsTrigger value="description">
            Description
          </TabsTrigger>
          <TabsTrigger value="requirements">
            Requirements
          </TabsTrigger>
          <TabsTrigger value="company">Company</TabsTrigger>
        </TabsList>
        <TabsContent
          value="description"
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">
              Drive description
            </h1>
            <p className="text-sm font-semibold text-muted-foreground">
              {drive.jobdesc}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Job description</h1>
            <ul className="list-disc pl-5">
              {drive.completeJobDesc.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent
          value="requirements"
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">Prerequisites:</h1>
            <p className="text-sm font-medium">
              {drive.prerequisites}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold">Requirements:</h1>
            <ul>
              <ul>
                {Object.entries(drive.requirements).map(
                  ([key, value], index) => {
                    let label = "";
                    switch (key) {
                      case "tenth_grade":
                        label = "10th Grade";
                        break;
                      case "twelfth_grade":
                        label = "12th Grade";
                        break;
                      case "cgpa":
                        label = "Minimum CGPA";
                        break;
                      case "departments":
                        label = "Eligible Departments";
                        break;
                      default:
                        label = key;
                    }

                    return (
                      <li
                        key={index}
                        className="flex gap-2 items-center"
                      >
                        <p className="font-bold">{label}:</p>{" "}
                        {Array.isArray(value) ? (
                          value.join(", ")
                        ) : (
                          <p className="font-semibold text-accent-foreground">
                            {value}
                          </p>
                        )}
                      </li>
                    );
                  }
                )}
              </ul>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="company" className="flex flex-col">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Building strokeWidth={2.5} size={20} />
              <h1 className="text-xl font-bold">
                {drive.company}
              </h1>
            </div>

            <div className="flex flex-col gap-1 font-medium">
              {/* Description */}
              <div className="flex items-start gap-2">
                <FileText
                  strokeWidth={2}
                  size={18}
                  className="mt-0.5 flex-shrink-0"
                />
                <p className="text-sm">
                  {drive.companydetails.description}
                </p>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2">
                <Globe strokeWidth={2} size={18} />
                <a
                  href={drive.companydetails.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  {drive.companydetails.website}
                </a>
              </div>

              {/* Revenue */}
              <div className="flex items-center gap-2">
                <Banknote strokeWidth={2} size={18} />
                <p className="text-sm">
                  Revenue: {drive.companydetails.revenue}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2">
                <MapPin
                  strokeWidth={2}
                  size={18}
                  className="mt-0.5 flex-shrink-0"
                />
                <p className="text-sm">
                  {drive.companydetails.address}
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DialogContent>
  </Dialog>
  )
}

export default DriveDialog