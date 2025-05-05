import { Card } from "@/components/ui/card";

const page = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-col flex-1 gap-5 max-w-[1300px] px-4 pb-3">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">Assessments</h1>
          <p className="font-medium text-sm text-muted-foreground">
            Evaluate your skills and prepare confidently for every opportunity
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
