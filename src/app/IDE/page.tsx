import { Card } from "@/components/ui/card";
import Monaco from "./Monaco";

const page = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      {/* This container enforces max-width */}
      <div className="flex flex-col flex-1 gap-5 w-full max-w-[1300px] px-4 pb-3">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">Coding IDE</h1>
          <p className="font-medium text-accent-foreground">
            A coding IDE that helps you write code faster and more efficiently.
          </p>
        </div>
        
        {/* Critical: This container prevents overflow */}
        <Card className="flex-1 min-h-[500px] w-full overflow-hidden p-2 rounded-2xl">
          <Monaco />
        </Card>
      </div>
    </div>
  );
};

export default page;