"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";

type Props = {
  options: Record<string, string>;
  selected: string | null;
  onSelect: (key: string | null) => void;
};

export default function OptionSelector({ options, selected, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-2 h-full">
      {Object.entries(options).map(([key, value]) => (
        <div
          key={key}
          onClick={() => onSelect(key)}
          className={cn(
            "cursor-pointer border rounded-md px-4 py-3 transition-colors h-1/5 flex items-center",
            selected === key
              ? "bg-blue-50 border-blue-400"
              : "bg-white border-gray-300"
          )}
        >
          <div className="flex justify-between w-full items-center px-2">
            <p className="text-left">{value}</p>
            <p
              className={cn(
                "text-left font-bold text-5xl",
                selected === key ? "text-blue-600" : "text-muted-foreground"
              )}
            >
              {key.toUpperCase()}
            </p>
          </div>
        </div>
      ))}
      <div className="flex w-full h-1/5 py-5 gap-2">
        <Button className="bg-amber-500 w-25/51 h-full cursor-pointer hover:bg-amber-600 transition-all duration-500">
          <Flag />
          Flag
        </Button>
        <Button onClick={() => onSelect(null)} className="w-25/51 h-full">
          Deselect
        </Button>
      </div>
    </div>
  );
}
