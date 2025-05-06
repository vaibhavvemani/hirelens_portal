import { Card } from "@/components/ui/card";
import AssessmentPage from "./components/assessmentPage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-col flex-1 gap-5 max-w-[1300px] px-4 pb-3">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">Assessments</h1>
          <p className="font-medium text-sm text-muted-foreground">
            Evaluate your skills and prepare confidently for every opportunity
          </p>
    <Tabs defaultValue="pending" className="w-full mt-4">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="pending">Pending Assessments</TabsTrigger>
        <TabsTrigger value="overdue">Overdue Assessments</TabsTrigger>
        <TabsTrigger value="submitted">Submitted Assessments</TabsTrigger>
        <TabsTrigger value="all">All Assessments</TabsTrigger>
      </TabsList>
      <TabsContent value="pending">
      <AssessmentPage value="pending"/>
      </TabsContent>
      <TabsContent value="overdue">
      <AssessmentPage value="overdue"/>
      </TabsContent>
      <TabsContent value="submitted">
      <AssessmentPage value="submitted"/>
      </TabsContent>
      <TabsContent value="all">
      <AssessmentPage value="all"/>
      </TabsContent>
    </Tabs>
        </div>
      </div>
    </div>
  );
};

export default page;
