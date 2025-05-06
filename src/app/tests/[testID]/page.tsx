"use client";

import { useParams } from "next/navigation";
import SampleAssessment from "@/app/assessments/components/SampleAssessments";
import Confirmation from "../Confirmation";
import { Test } from "@/types/AssessmentType";
import Countdown from "../Countdown";

import { useState } from "react";



export default function TestPage() {
  const params = useParams();
  const testId = params.testID;
  const [hasConfirmed, setHasConfirmed] = useState(false)

  if (!testId || isNaN(Number(testId))) {
    return <div>404 Page Not Found</div>;
  }

  const assessment = SampleAssessment.tests[Number(testId)];

  if (!assessment) {
    console.log("assessment not found for testId:", testId);
    return <div className="text-center mt-10">Assessment not found</div>;
  }


  return (
    <div className="w-full h-full">
        {!hasConfirmed ? (
            <Confirmation assessment={assessment as Test}
          onStart={() => setHasConfirmed(true)}
        />
      ) : (
        <Countdown assessment={assessment as Test} />
      )}
    </div>
  );
}
