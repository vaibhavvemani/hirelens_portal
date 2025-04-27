"use client";

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
      { title: "Interview Drives", url: "/admin", icon: BriefcaseBusiness },
    ],
  },
  {
    label: "Student Profile",
    items: [
      { title: "Resume", url: "#", icon: FileUser },
      { title: "Mail", url: "#", icon: Mail },
    ],
  },
  {
    label: "Learning & Development",
    items: [
      { title: "Coursework", url: "#", icon: BookOpen },
      { title: "DSA Roadmap", url: "#", icon: CodeXml },
      { title: "Coding IDE", url: "#", icon: SquareChevronRight },
      { title: "Assignments", url: "#", icon: FileText },
    ],
  },
  {
    label: "Community",
    items: [{ title: "Class Discussions", url: "#", icon: MessagesSquare }],
  },
  {
    label: "Utilities",
    items: [{ title: "Calendar", url: "#", icon: Calendar }],
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
                      <a href={item.url} className="flex items-center">
                        <item.icon size={20} />
                        <span>{item.title}</span>
                      </a>
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
              <SidebarMenuButton className="flex items-center">
                <User2 size={20} />
                <div>
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
