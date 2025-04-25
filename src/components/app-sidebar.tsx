'use client'

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
    SidebarTrigger,
    useSidebar,
  } from "@/components/ui/sidebar"


  import { LayoutDashboard, BookOpen, CodeXml, Mail, FileText, Calendar, MessagesSquare, FileUser } from "lucide-react"


  const items = [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      title: "Resume",
      url: "#",
      icon: FileUser,
    },
    {
      title: "Coursework",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Coding IDE",
      url: "#",
      icon: CodeXml,
    },
    {
      title: "Mail",
      url: "#",
      icon: Mail,
    },
    {
      title: "Assignments",
      url: "#",
      icon: FileText,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Class Discussions",
      url: "#",
      icon: MessagesSquare,
    },
  ]
  
  export function AppSidebar() {

    const { toggleSidebar,state } = useSidebar()
    return (

      <Sidebar collapsible="icon" variant="floating" onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
        <SidebarContent>
            <SidebarGroupLabel>Assessment Platform</SidebarGroupLabel>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                      <item.icon size={105}/>
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
  