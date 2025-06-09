import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, FileText, FileUser, Upload } from "lucide-react";
import resumes from "./resumes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import PDFThumbnail from "./PDFThumbnail";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import PDFRenderer from "./PDFRenderer";
import UploadNew from "./UploadNew";

const YourResumes = () => {
  const defaultResume = resumes.find((resume) => resume.default);
  const otherResumes = resumes.filter((resume) => !resume.default);

  const renderResumeCard = (resume: typeof resumes[0], index: string | number) => (
    <Card key={index} className={`flex flex-4 px-3 py-2 gap-2 ${resume.default ? "border-2 border-green-500" : ""}`}>
      <div className="flex items-center gap-4">
        <div className="flex-2">
          <CardHeader className="p-0 gap-0">
            <div className="flex flex-col">
              <CardTitle className="text-lg leading-tight">{resume.name}</CardTitle>
              {resume.description && (
                <CardDescription className="leading-tight text-xs">{resume.description}</CardDescription>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-0 mt-3">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-muted-foreground font-semibold">
                AI Score: {resume.aiscore}%
              </p>
              <Progress value={resume.aiscore} />
            </div>
            <p className="text-xs h-fit mt-2 text-muted-foreground font-medium bg-secondary w-fit px-2 py-1 rounded-sm">
              Last updated: {resume.dateUpdated.toLocaleDateString()}
            </p>
          </CardContent>
          <CardFooter className="w-full mt-3 p-0 gap-2">
            <Button className="flex-1">
              <Bot />
              <p>AI tips</p>
            </Button>
            {!resume.default && (
              <Button className="flex-1">
                <FileText /> <p>Set as default</p>
              </Button>
            )}
          </CardFooter>
        </div>
        <div className="flex-1 rounded-2xl">
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <PDFThumbnail fileUrl={resume.file} />
              </div>
            </DialogTrigger>
            <DialogContent className="w-full min-w-[550px] overflow-hidden px-4 py-4 ">
              <DialogHeader className="gap-0 p-0">
                <div className="flex justify-between items-center">
                  <DialogTitle>{resume.name}</DialogTitle>
                </div>
                {resume.description && <DialogDescription>{resume.description}</DialogDescription>}
                <Card className="flex flex-row w-full justify-between gap-5 items-center mt-3 px-4 py-2">
                  <div className="flex flex-5 flex-col gap-1">
                    <p className="text-sm font-semibold">AI Score: {resume.aiscore}%</p>
                    <Progress value={resume.aiscore} />
                  </div>
                  <Badge className="flex flex-3 text-sm">
                    Last Updated: {resume.dateUpdated.toLocaleDateString()}
                  </Badge>
                </Card>
              </DialogHeader>
              <PDFRenderer fileUrl={resume.file} width={520} height={750} scale={0.85} navigator={true} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Card>
  );

  return (
    <Card className="px-4 py-3 pb-4">
      <CardHeader className="p-0 gap-0">
        <div className="flex items-center gap-1">
          <FileUser strokeWidth={2} size={20} />
          <CardTitle className="text-xl font-semibold">Your Resumes</CardTitle>
        </div>
        <CardDescription className="font-medium">
          Upload up to 3 different resumes for various job requirements
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-3 p-0 justify-between flex-wrap">
        {defaultResume && renderResumeCard(defaultResume, "default")}
        {otherResumes.map((resume, index) => renderResumeCard(resume, index))}
        {Array.from({ length: 3 - resumes.length }).map((_, i) => (
          <Card
            key={`empty-${i}`}
            className="flex flex-3 border-dashed p-3 justify-around"
          >
            <CardHeader className="p-0 gap-4">
              <CardTitle>
                <Input placeholder="Enter Resume name" className="w-full" />
              </CardTitle>
              <CardContent className="flex flex-col items-center p-0 gap-2">
                <Dialog>
                  <DialogTrigger>
                    <div className="flex items-center rounded-md px-3 py-2 gap-2 hover:text-secondary-foreground hover:bg-muted bg-foreground text-background cursor-pointer transition-all duration-350">
                      <Upload size={20}/>
                      <p className="font-medium text-sm">Upload resume</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Upload a new resume</DialogTitle>
                    <UploadNew />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default YourResumes;
