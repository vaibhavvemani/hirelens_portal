import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  const Legend = () => {
    const styleMap: Record<string, string> = {
      assignment: "bg-blue-300",
      application: "bg-green-300",
      drive: "bg-yellow-300",
      orientation: "bg-purple-300",
      "assessment deadline": "bg-red-300",
    };
  
    return (
      <Card className="flex-1 gap-0">
        <CardHeader>
          <CardTitle>Schedule Legend</CardTitle>
          <CardDescription>Event types and color coding</CardDescription>
        </CardHeader>
        <div className="px-6 pb-4 space-y-2 mt-4">
          {Object.entries(styleMap).map(([type, borderColor]) => (
            <div key={type} className="flex items-center space-x-3">
              <span className={`w-4 h-4 rounded-4xl ${borderColor}`} />
              <span className="text-sm capitalize">{type}</span>
            </div>
          ))}
        </div>
      </Card>
    );
  };
  
  export default Legend;
  