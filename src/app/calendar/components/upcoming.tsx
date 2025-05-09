import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { scheduleItems } from "./SampleSchedule";
import { format } from "date-fns";

type TaskType =
  | "assignment"
  | "application"
  | "drive"
  | "orientation"
  | "assessment deadline";

const Upcoming = () => {
  const today = new Date();
  const  next5Days = new Date();
   next5Days.setDate(today.getDate() + 5);

  const upcomingItems = scheduleItems
    .filter((item) => item.dueDate >= today && item.dueDate <=  next5Days)
    .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

  const styleMap: Record<TaskType, string> = {
    assignment: "bg-blue-100 text-blue-800 border-blue-300",
    application: "bg-green-100 text-green-800 border-green-300",
    drive: "bg-yellow-100 text-yellow-800 border-yellow-300",
    orientation: "bg-purple-100 text-purple-800 border-purple-300",
    "assessment deadline": "bg-red-100 text-red-800 border-red-300",
  };

  const badgeMap: Record<TaskType, string> = {
    assignment: "bg-blue-300 text-blue-800 border-blue-500",
    application: "bg-green-300 text-green-800 border-green-500",
    drive: "bg-yellow-300 text-yellow-800 border-yellow-500",
    orientation: "bg-purple-300 text-purple-800 border-purple-500",
    "assessment deadline": "bg-red-300 text-red-800 border-red-500",
  };

  return (
    <Card className="flex-1 gap-0">
      <CardTitle className="text-lg px-4">Upcoming Events</CardTitle>
      <CardDescription className="px-4 text-sm text-muted-foreground">
        Your schedule for the next 5 days
      </CardDescription>
      <CardContent className="py-4 px-4">
        {upcomingItems.length === 0 ? (
          <p className="text-sm text-gray-500">
            No events in the next 7 days.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingItems.map((item) => {
              const cardStyle = styleMap[item.type];
              const badgeStyle = badgeMap[item.type];

              return (
                <div
                  key={item.id}
                  className={`border p-3 rounded-lg ${cardStyle}`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{item.title}</p>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full border ${badgeStyle}`}
                    >
                      {item.type.replace("-", " ")}
                    </span>
                  </div>
                  <p className="text-sm mt-1">
                    {format(item.dueDate, "PPP")}
                  </p>
                  <p className="text-xs mt-1">{item.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Upcoming;
