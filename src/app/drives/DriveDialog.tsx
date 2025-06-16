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
import Description from "./DialogTabsContent/Description";
import Requirements from "./DialogTabsContent/Requirements";
import Company from "./DialogTabsContent/Company";
import Rounds from "./DialogTabsContent/Rounds";

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
        <TabsList className="grid w-full grid-cols-4 mb-2">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="rounds">Rounds</TabsTrigger>
        </TabsList>
        <TabsContent
          value="description"
          className="flex flex-col gap-3"
        >
          <Description drive={drive} />
        </TabsContent>
        <TabsContent
          value="requirements"
          className="flex flex-col gap-3"
        >
          <Requirements drive={drive} />
        </TabsContent>
        <TabsContent value="company" className="flex flex-col">
          <Rounds drive={drive} />
          <Company drive={drive} />
        </TabsContent>
        <TabsContent value="rounds" className="flex flex-col">
          <Rounds drive={drive} />
        </TabsContent>
      </Tabs>
    </DialogContent>
  </Dialog>
  )
}

export default DriveDialog