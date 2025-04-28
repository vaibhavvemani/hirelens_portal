import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssessmentTable from "./Assessments/AssessmentTable";

const Assessments = () => {
  return (
    <div className="flex flex-col mt-3 w-full">
      <h1 className="text-xl font-bold">Assessments</h1>
      <p className="text-sm font-semibold text-muted-foreground">
        Track and submit your assessments
      </p>
      <Tabs defaultValue="Pending" className="w-full pt-5">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="Pending" className="cursor-pointer">
            Pending
          </TabsTrigger>
          <TabsTrigger value="Submitted" className="cursor-pointer">
            Submitted
          </TabsTrigger>
          <TabsTrigger value="Overdue" className="cursor-pointer">
            Overdue
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Pending">
          <AssessmentTable status="Due" />
        </TabsContent>
        <TabsContent value="Submitted">
          <AssessmentTable status="Submitted" />
        </TabsContent>
        <TabsContent value="Overdue">
          <AssessmentTable status="Overdue" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Assessments;
