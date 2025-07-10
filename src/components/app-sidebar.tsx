"use client";

import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  User2,
  LayoutDashboard,
  BookOpen,
  CodeXml,
  Mail,
  FileText,
  Calendar,
  MessagesSquare,
  FileUser,
  SquareChevronRight,
  BriefcaseBusiness,
} from "lucide-react";

type SidebarItem = {
  title: string;
  url: string;
  icon: React.ElementType;
};

type SidebarGroupType = {
  label: string;
  items: SidebarItem[];
};

// ✨ Grouped Sidebar Structure
const sidebarGroups: SidebarGroupType[] = [
  {
    label: "Placements",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
      { title: "Interview Drives", url: "/drives", icon: BriefcaseBusiness },
      { title: "Feedback", url: "/feedback", icon: MessagesSquare }
    ],
  },
  {
    label: "Student Profile",
    items: [
      { title: "Resume", url: "/resume", icon: FileUser },
      { title: "Mail", url: "/mail", icon: Mail },
    ],
  },
  {
    label: "Class",
    
    items: [
      { title: "Courses", url: "/courses", icon: BookOpen },
      { title: "Class Discussions", url: "/discussions", icon: MessagesSquare }
    ],
  },
  {
    label: "Learning & Development",
    items: [
      { title: "DSA Roadmap", url: "/DSARoadmap", icon: CodeXml },
      { title: "Coding IDE", url: "IDE", icon: SquareChevronRight },
      { title: "Assessments", url: "/assessments", icon: FileText },
    ],
  },
  {
    label: "Utilities",
    items: [{ title: "Calendar", url: "/calendar", icon: Calendar }],
  },
];

export function AppSidebar() {
  const { setOpen } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      variant="floating"
      onMouseEnter={()=>{setOpen(true)}}
      onMouseLeave={()=>{setOpen(false)}}
    >
      <SidebarContent>
        {sidebarGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url} className="flex items-center">
                        <item.icon size={20} />
                        <p>{item.title}</p>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <SidebarFooter className="mt-auto mb-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="flex items-center py-6 cursor-pointer">
                <User2 size={20} />
                <div className="flex flex-col">
                  <p className="font-extrabold">Username</p>
                  <p className="font-medium text-accent-foreground">
                    username@email.com
                  </p>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
