import { Card, CardTitle } from "@/components/ui/card";
import { Drive } from "@/types/drives";
import { Resume } from "@/types/resume";
import { Separator } from "@/components/ui/separator";
import PDFRenderer from "./PDFRenderer";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Chatbot from "./Chatbot";

interface JobResumeDialogProps {
  resume: Resume;
  drive: Drive;
}

const JobResumeDialog = ({ resume, drive }: JobResumeDialogProps) => {
  return (
    <Card className="min-w-[800px] flex flex-col p-2 h-[80vh]">
      <div className="flex flex-8 flex-row overflow-scroll hide-scroller gap-2">
        <Card className="p-2 overflow-y-scroll overflow-x-hidden hide-scroller flex-1">
          <CardTitle className="p-0 h-fit">Resume: {resume.name}</CardTitle>
          <Separator />
          <PDFRenderer
            fileUrl={resume.file}
            width={400}
            height={650}
            scale={0.6}
            navigator={false}
          />
        </Card>
        <Card className="p-2 overflow-scroll hide-scroller flex-1">
          <CardTitle className="p-0 h-fit">AI Resume Analyser</CardTitle>
          <Separator />
          <Card className="h-full p-2">
            <Chatbot resume={resume} drive = {drive}/>
          </Card>
        </Card>
      </div>
      <Card className="flex-3 p-2 overflow-scroll hide-scroller">
        <CardTitle className="p-0 h-fit">Complete Job Description</CardTitle>
        <Separator />
        <div className="flex gap-4 px-2">
          <div className="flex-1">
            {drive.completeJobDesc
              .slice(0, Math.ceil(drive.completeJobDesc.length / 2))
              .map((pointer, index) => (
                <li key={index} className="text-xs">
                  {pointer}
                </li>
              ))}
          </div>
          <div className="flex-1">
            {drive.completeJobDesc
              .slice(Math.ceil(drive.completeJobDesc.length / 2))
              .map((pointer, index) => (
                <li key={index} className="text-xs">
                  {pointer}
                </li>
              ))}
          </div>
        </div>
      </Card>
    </Card>
  );
};

export default JobResumeDialog;
