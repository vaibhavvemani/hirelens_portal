"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Event = {
  id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  notes: string;
  dueDate: Date;
};

type AddEventDialogProps = {
  onAddEvent: (event: Event) => void;
};

const AddEventDialog = ({ onAddEvent }: AddEventDialogProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<Event>({
    id: Date.now().toString(),
    title: "",
    description:"",
    type: "application",
    status: "pending",
    notes: "",
    dueDate: new Date(),
  });

  const handleSubmit = () => {
    const eventToAdd = {
      ...newEvent,
      id: Date.now().toString(),
    };
    onAddEvent(eventToAdd);
    setIsPopoverOpen(false);
  };

  return (
    <Dialog open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="h-9 cursor-pointer">
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </DialogTrigger>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle>Add Event</DialogTitle>
          <DialogDescription>
            Add an event for your calendar on this day!
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="col-span-3"
              placeholder="e.g., Apply to Microsoft SWE Internship"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
              className="col-span-3"
              placeholder="finish updating resume and apply for the internship"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Type
            </Label>
            <Select
              value={newEvent.type}
              onValueChange={(value) =>
                setNewEvent({ ...newEvent, type: value })
              }
              required
            >
              <SelectTrigger id="type" className="col-span-3">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="application">Application</SelectItem>
                <SelectItem value="assignment">Assignment Deadline</SelectItem>
                <SelectItem value="drive">Placement Drive</SelectItem>
                <SelectItem value="orientation">Drive Orientation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select
              value={newEvent.status}
              onValueChange={(value) =>
                setNewEvent({ ...newEvent, status: value })
              }
              required
            >
              <SelectTrigger id="status" className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notes" className="text-right">
              Notes
            </Label>
            <Input
              id="notes"
              value={newEvent.notes}
              onChange={(e) =>
                setNewEvent({ ...newEvent, notes: e.target.value })
              }
              className="col-span-3"
              placeholder="Any additional details"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dueDate" className="text-right">
              Due Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal col-span-3",
                    !newEvent.dueDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {newEvent.dueDate ? format(newEvent.dueDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={newEvent.dueDate}
                  onSelect={(date) => {
                    if (date) {
                      setNewEvent({ ...newEvent, dueDate: date });
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddEventDialog;
