"use client";

import { useParams } from "next/navigation";
import SampleAssessment from "@/app/assessments/components/SampleAssessments";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function TestTakingPage() {
    const params = useParams();
    const testID = params.testID;

    const assessment = SampleAssessment.tests[Number(testID)]


  return (
    <div className="max-w-[1300px] w-full flex flex-col p-5 items-center">
        <Card className="flex flex-row w-full justify-between p-2">
            <h1 className="font-bold text-2xl w-[300px]">{assessment.name.replace(/_/g, ' ')}</h1>
            <div className="w-[300px] flex justify-center">
            <Label className="bg-accent px-4 rounded-sm text-accent-foreground font-bold text-lg">29:59</Label>
            </div>
            <div className="w-[300px] flex justify-end">
            <Button>Submit</Button>
            </div>
        </Card>
        <div className="flex">
            <Card></Card>
            <div className="flex flex-col">

            </div>
        </div>
        <Card></Card>
    </div>
  );
}
