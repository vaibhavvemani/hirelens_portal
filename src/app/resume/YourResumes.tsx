import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, Eye, File, FileText, FileUser, Upload } from "lucide-react";
import resumes from "./resumes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const YourResumes = () => {
  return (
    <Card className="px-4 py-2">
      <CardHeader className="p-0 gap-0">
        <div className="flex items-center gap-1">
          <FileUser strokeWidth={2} size={20} />
          <CardTitle className="text-xl font-semibold">Your Resumes</CardTitle>
        </div>
        <CardDescription className="font-medium">
          Upload up to 3 different resumes for various job requirements
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-3 p-0 justify-between">
        {resumes.map((resume, index) => (
          <Card
            key={index}
            className="flex flex-4 px-3 py-2 gap-0 justify-between"
          >
            <div className="flex gap-3">
              <div className="flex-4">
              <CardHeader className="p-0 gap-0">
              <div className="flex flex-col">
                <CardTitle className="text-lg leading-tight">
                  {resume.name}
                </CardTitle>
                {resume.description ? (
                  <CardDescription className="leading-tight text-xs">
                    {resume.description}
                  </CardDescription>
                ) : (
                  <></>
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
            <CardFooter className="w-full bg-red-50 mt-3 p-0 gap-2">
              <Button className="flex-1 text-xs">
                <Bot />
                <p>AI tips</p>
              </Button>
              {!resume.default ? (
                <Button className="flex-1 text-xs">
                  <FileText /> <p>Set as default</p>
                </Button>
              ) : (
                <></>
              )}
            </CardFooter>
              </div>
              <div className="flex-2 bg-amber-400 rounded-sm"></div>
            </div>
          </Card>
        ))}

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
                <Button className="hover:text-secondary-foreground hover:bg-muted bg-foreground text-background cursor-pointer transition-all duration-350">
                  <Upload className="" />
                  <p>Upload resume</p>
                </Button>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default YourResumes;
