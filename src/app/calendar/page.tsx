"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";

import AddEventDialog from "./AddEventDialog";
import Legend from "./components/legend";
import Upcoming from "./components/upcoming";



import { CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState, useEffect } from "react";


import Day from "./components/day";
import Month from "./components/month";
import Week from "./components/week";

const Page = () => {
  const [eventDate, setEventDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("week");
  const [renderValue, setRenderValue] = useState<Date | [Date, Date]>(() => {
    const now = new Date();
    const start = new Date(now);
    start.setDate(now.getDate() - 3);
    const end = new Date(now);
    end.setDate(now.getDate() + 3);
    return [start, end];
  });
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    id: Date.now().toString(),
    title: "",
    type: "application",
    status: "pending",
    notes: "",
    dueDate: new Date(),
  });

  useEffect(() => {
    // Ensures renderValue is updated on view mode change
    if (viewMode === "day") {
      setRenderValue(new Date());
    } else if (viewMode === "week") {
      const now = new Date();
      const start = new Date(now);
      start.setDate(now.getDate() - 3);
      const end = new Date(now);
      end.setDate(now.getDate() + 3);
      setRenderValue([start, end]);
    } else if (viewMode === "month") {
      const now = new Date();
      const start = new Date(now.getFullYear(), now.getMonth(), 1);
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      setRenderValue([start, end]);
    }
  }, [viewMode]);

  function handlePrev() {
    if (viewMode === "day" && renderValue instanceof Date) {
      setRenderValue(new Date(renderValue.setDate(renderValue.getDate() - 1)));
    } else if (viewMode === "week" && Array.isArray(renderValue)) {
      const startDate = new Date(renderValue[0]);
      const endDate = new Date(renderValue[1]);
      setRenderValue([
        new Date(startDate.setDate(startDate.getDate() - 7)),
        new Date(endDate.setDate(endDate.getDate() - 7)),
      ]);
    } else if (viewMode === "month" && Array.isArray(renderValue)) {
      const startDate = new Date(renderValue[0]);
      const endDate = new Date(renderValue[1]);
      setRenderValue([
        new Date(
          startDate.getFullYear(),
          startDate.getMonth() - 1,
          startDate.getDate()
        ),
        new Date(
          endDate.getFullYear(),
          endDate.getMonth() - 1,
          endDate.getDate()
        ),
      ]);
    }
  }

  function handleNext() {
    if (viewMode === "day") {
      if (viewMode === "day" && renderValue instanceof Date) {
        setRenderValue(
          new Date(renderValue.setDate(renderValue.getDate() + 1))
        );
      }
    } else if (viewMode === "week" && Array.isArray(renderValue)) {
      const startDate = new Date(renderValue[0]);
      const endDate = new Date(renderValue[1]);
      setRenderValue([
        new Date(startDate.setDate(startDate.getDate() + 7)),
        new Date(endDate.setDate(endDate.getDate() + 7)),
      ]);
    } else if (viewMode === "month" && Array.isArray(renderValue)) {
      const startDate = new Date(renderValue[0]);
      const endDate = new Date(renderValue[1]);
      setRenderValue([
        new Date(
          startDate.getFullYear(),
          startDate.getMonth() + 1,
          startDate.getDate()
        ),
        new Date(
          endDate.getFullYear(),
          endDate.getMonth() + 1,
          endDate.getDate()
        ),
      ]);
    }
  }

  function handleToday(){
    setViewMode("day")
    setRenderValue(new(Date))
  }

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-col flex-1 gap-5 max-w-[1300px] px-4 pb-3">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold">Calendar</h1>
            <p className="font-medium text-sm text-muted-foreground">
              Manage your classes, assignment deadlines and placement drives
            </p>
          </div>
          <div className="flex items-center gap-2 h-fit">
            <Button className="h-9 cursor-pointer" onClick={handleToday}>Today</Button>
            <div className="flex items-center gap-1">
              <Button
                className="h-9 w-9 cursor-pointer bg-background hover:bg-muted"
                onClick={handlePrev}
              >
                <ChevronLeft className="text-foreground" />
              </Button>
              <p className="text-center p-2 bg-accent rounded-lg mx-2 text-sm">
                {viewMode === "day" && renderValue instanceof Date
                  ? renderValue.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : Array.isArray(renderValue) && viewMode === "week"
                  ? `${renderValue[0].toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })} - 
                  ${renderValue[1].toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}`
                  : Array.isArray(renderValue) && viewMode === "month"
                  ? renderValue[0].toLocaleString("default", { month: "long" })
                  : ""}
              </p>
              <Button
                className="h-9 w-9 cursor-pointer bg-background hover:bg-muted"
                onClick={handleNext}
              >
                <ChevronRight className="text-foreground" />
              </Button>
            </div>
            <Select
              value={viewMode}
              onValueChange={(value) => {
                setViewMode(value as "day" | "week" | "month");
              }}
            >
              <SelectTrigger className="w-[120px] h-9 cursor-pointer">
                <SelectValue placeholder="Week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Day</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
              </SelectContent>
            </Select>

            
<AddEventDialog onAddEvent={(event) => {
  console.log("Event added:", event);
  // TODO: Update your state/backend here
}} />
          </div>
        </div>

        {viewMode === "day" && renderValue instanceof Date ? (
          <Day date={renderValue} />
        ) : viewMode === "week" && Array.isArray(renderValue) ? (
          <Week range={renderValue} />
        ) : viewMode === "month" && Array.isArray(renderValue) ? (
          <Month range={renderValue} />
        ) : null}
              <div className="flex gap-4 mt-2">
        <Upcoming />
        <Legend />
      </div>
      </div>

    </div>
  );
};

export default Page;
