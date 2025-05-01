import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { scheduleItems } from "./SampleSchedule";
import { CalendarClock, CornerRightUp } from "lucide-react";
import AddEventDialog from "../AddEventDialog";
import Upcoming from "./upcoming";
import Legend from "./legend";

type TaskType =
  | "assignment"
  | "application"
  | "drive"
  | "orientation"
  | "assessment deadline";

interface ScheduleItem {
  id: string;

  title: string;
  type: TaskType;
  dueDate: Date;
  status: "pending" | "in-progress" | "completed";
  notes?: string;
  description?: string;
}

interface DayProps {
  date: Date;
}

interface TodayCardProps {
  items: ScheduleItem[];
}

const TodayCard: React.FC<TodayCardProps> = ({ items }) => {
  return (
    <>
      {items.map((event) => {
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

        const cardStyle = styleMap[event.type];
        const badgeStyle = badgeMap[event.type];

        return (
          <Card key={event.id} className={`mb-2 p-3 border ${cardStyle} gap-0`}>
            <div className="flex justify-between">
              <CardTitle>{event.title}</CardTitle>
              <Badge
                className={`text-xs font-medium px-2 py-1 rounded-xl ${badgeStyle}`}
              >
                {event.type}
              </Badge>
            </div>
            <div className="flex flex-col gap-1">
              <CardDescription className={`${cardStyle} text-base`}>
                {event.description}
              </CardDescription>
              <div className="flex text-muted-foreground gap-2 items-center">
                <CalendarClock size={20} className=" stroke-2.5" />
                <p className="text-base">
                  {event.dueDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              {event.notes && (
                <p className={`text-base w-fit font-bold mt-1`}>
                  Notes: {event.notes}
                </p>
              )}
            </div>
          </Card>
        );
      })}
    </>
  );
};

const EmptyCard: React.FC = () => {
  return (
    <div>
      <Card className="border border-dashed flex flex-col items-center">
        <CardDescription className="text-lg">
          No events scheduled for this day
        </CardDescription>
        <AddEventDialog
          onAddEvent={(event) => {
            console.log("Event added:", event);
            // TODO: Update your state/backend here
          }}
        />
      </Card>
    </div>
  );
};

const Day: React.FC<DayProps> = ({ date }) => {
  const itemsForDate = scheduleItems.filter(
    (item) => item.dueDate.toDateString() === date.toDateString()
  );

  return (
    <div>
      <Card className="w-full">
        <CardHeader className="flex justify-between">
          <CardTitle>
            {date.toLocaleString("default", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </CardTitle>
          <Badge className="px-3 py-1 rounded-2xl bg-accent text-accent-foreground">
            {date.toLocaleString("default", { weekday: "long" })}
          </Badge>
        </CardHeader>
        <div className="flex flex-col gap-1 mx-5">
          {itemsForDate.length > 0 ? (
            <TodayCard items={itemsForDate} />
          ) : (
            <EmptyCard />
          )}
        </div>
      </Card>
      <div className="flex gap-4 mt-4">
        <Upcoming />
        <Legend />
      </div>
    </div>
  );
};

export default Day;
