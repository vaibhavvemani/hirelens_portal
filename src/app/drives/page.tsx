import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Drives from "./Drives";

const page = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-col flex-1 gap-5 max-w-[1300px] px-4 pb-3">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">Drives</h1>
          <p className="font-medium text-sm text-muted-foreground">
            Unlock Your Career Potential with Our Opportunities
          </p>
          <Tabs defaultValue="all" className="w-full mt-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Drives</TabsTrigger>
              <TabsTrigger value="eligible">Eligible</TabsTrigger>
              <TabsTrigger value="applied">Applied</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <Drives type="all" />
            </TabsContent>
            
            <TabsContent value="eligible">
              <Drives type="eligible" />
            </TabsContent>
            
            <TabsContent value="applied">
              <Drives type="applied" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default page;
