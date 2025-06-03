"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function SidebarConditional() {
  const pathname = usePathname();

  const showSidebarRoutes = ["/dashboard", "/assessments", "/calendar", "/drives", "/discussions", "/IDE", "/DSARoadmap", "/courses", "/resume"];

  const showSidebar = showSidebarRoutes.some((route) => pathname.startsWith(route));

  if (!showSidebar) return null;

  return (
    <>
      <AppSidebar />
      <SidebarTrigger />
    </>
  );
}
