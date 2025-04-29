"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";


import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

import Day from "./components/day";
import Month from "./components/month";
import Week from "./components/week";


const page = () => {
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("week");
  const [renderValue, setRenderValue] = useState<Date | string>(Date());

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
            <Button className="h-9 cursor-pointer">Today</Button>
            <div className="flex items-center gap-1">
              <Button className="h-9 w-9 cursor-pointer bg-background hover:bg-muted">
                <ChevronLeft className="text-foreground"/>
              </Button>
              <p className="text-center p-2 bg-accent rounded-lg mx-2">{viewMode}</p>
              <Button className="h-9 w-9 cursor-pointer bg-background hover:bg-muted">
                <ChevronRight className="text-foreground"/>
              </Button>
            </div>
            <Select
              value={viewMode}
              onValueChange={(value) =>
                setViewMode(value as "day" | "week" | "month")
              }
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
            <Button size="sm" className="h-9 cursor-pointer">
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </div>
        </div>
        {viewMode =="day"?
        <Day />:
        viewMode == "week"?
        <Week />:
        <Month />
        }
      </div>
    </div>
  );
};

export default page;
