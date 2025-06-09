import { Card, CardTitle } from "@/components/ui/card";
import { Drive } from "@/types/drives";
import { Resume } from "@/types/resume";
import { Separator } from "@/components/ui/separator";
import PDFRenderer from "./PDFRenderer";

interface JobResumeDialogProps {
  resume: Resume;
  drive: Drive;
}

const JobResumeDialog = ({ resume, drive }: JobResumeDialogProps) => {
  return (
    <Card className="min-w-[800px] flex flex-row p-2">
      <Card className="flex-1 p-2">
        <CardTitle className="p-0 h-fit">Complete Job Description</CardTitle>
        <Separator />
          {drive.completeJobDesc.map((pointer, index) => (
            <li key={index} className="text-xs">{pointer}</li>
          ))}
      </Card>
      <Card className="flex-1 p-2">
        <CardTitle className="p-0 h-fit">Resume: {resume.name}</CardTitle>
        <Separator />
        <PDFRenderer
          fileUrl={resume.file}
          width={400}
          height={650}
          scale={0.65}
          navigator={false}
        />
      </Card>
    </Card>
  );
};

export default JobResumeDialog;
