import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Archive,
  Briefcase,
  Calendar,
  GraduationCap,
  Inbox,
  Megaphone,
  Star,
} from "lucide-react";

import { Filter } from "@/types/mail";

type NavigationItem = {
  icon: React.ReactNode;
  label: string;
  badgeCount?: number;
};

type CategoryItem = {
  icon: React.ReactNode;
  label: string;
};

interface SidebarProps {
  onSelect: (label: Filter) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  const [selectedLabel, setSelectedLabel] = useState<Filter>("Inbox");

  const navigationItems: NavigationItem[] = [
    { icon: <Inbox size={17} />, label: "Inbox", badgeCount: 13 },
    { icon: <Star size={17} />, label: "Starred", badgeCount: 13 },
    { icon: <Archive size={17} />, label: "Archived", badgeCount: 13 },
  ];

  const categoryItems: CategoryItem[] = [
    { icon: <Briefcase size={13} />, label: "Dept. of HRD" },
    { icon: <GraduationCap size={13} />, label: "Professors" },
    { icon: <Megaphone size={13} />, label: "Announcements" },
  ];

  const currentDate = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleSelect = (label: string) => {
    setSelectedLabel(label as Filter);
    onSelect(label as Filter);
  };

  return (
    <div className="flex-1 flex gap-1 border-r flex-col p-3 bg-accent rounded-l-sm">
      <div className="mb-2">
        <Badge className="flex gap-2 py-1 px-3 text-sm w-full">
          <Calendar />
          {currentDate}
        </Badge>
      </div>

      {navigationItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleSelect(item.label)}
          className={`flex items-center justify-between p-2 rounded-md cursor-pointer duration-300 ${
            selectedLabel === item.label
              ? "bg-background border-2"
              : "hover:bg-background"
          }`}
        >
          <div className="flex gap-3 items-center">
            {item.icon}
            <p className="text-sm font-medium">{item.label}</p>
          </div>
          {item.badgeCount && (
            <Badge className="p-0 px-1 rounded-full text-xs">
              {item.badgeCount}
            </Badge>
          )}
        </div>
      ))}

      <Separator className="my-1" />

      <div className="flex flex-col mt-1">
        <p className="text-xs font-semibold text-muted-foreground mb-2">
          Categories
        </p>

        <div className="flex flex-col">
          {categoryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item.label)}
              className={`flex items-center justify-between p-2 rounded-md cursor-pointer duration-300 ${
                selectedLabel === item.label
                  ? "bg-background border-1"
                  : "hover:bg-background"
              }`}
            >
              <div className="flex gap-2 items-center">
                {item.icon}
                <p className="text-xs font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
