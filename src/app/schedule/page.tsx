"use client"

import { useState } from "react"
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code2,
  FileText,
  Grid3X3,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Plus,
  Settings,
  User,
} from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Event {
  id: number
  title: string
  course: string
  start: Date
  end: Date
  type: 'lecture' | 'lab' | 'assignment' | 'exam' | 'study' | 'office_hours' | 'discussion'
  location?: string
  color: string
}

interface MenuProps extends React.SVGProps<SVGSVGElement> {}
interface UsersProps extends React.SVGProps<SVGSVGElement> {}

export default function SchedulePage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("week")

  // Helper function to format date as "Month Day, Year"
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  // Helper function to format date as "Day"
  const formatDay = (date: Date): string => {
    return date.toLocaleDateString("en-US", { day: "numeric" })
  }

  // Helper function to format date as "Day of Week"
  const formatDayOfWeek = (date: Date): string => {
    return date.toLocaleDateString("en-US", { weekday: "short" })
  }

  // Helper function to get dates for the current week
  const getWeekDates = (): Date[] => {
    const dates: Date[] = []
    const startDate = new Date(currentDate)
    startDate.setDate(currentDate.getDate() - currentDate.getDay()) // Start from Sunday

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)
      dates.push(date)
    }

    return dates
  }

  // Helper function to get month dates for calendar view
  const getMonthDates = (): { date: Date; isCurrentMonth: boolean }[] => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)

    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const dates: { date: Date; isCurrentMonth: boolean }[] = []

    // Add days from previous month to fill the first week
    const prevMonthLastDay = new Date(year, month, 0).getDate()
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const day = prevMonthLastDay - i
      const date = new Date(year, month - 1, day)
      dates.push({ date, isCurrentMonth: false })
    }

    // Add days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      dates.push({ date, isCurrentMonth: true })
    }

    // Add days from next month to complete the last week
    const remainingDays = 42 - dates.length // 6 rows of 7 days
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day)
      dates.push({ date, isCurrentMonth: false })
    }

    return dates
  }

  // Navigate to previous period (day, week, or month)
  const goToPrevious = () => {
    const newDate = new Date(currentDate)
    if (viewMode === "day") {
      newDate.setDate(currentDate.getDate() - 1)
    } else if (viewMode === "week") {
      newDate.setDate(currentDate.getDate() - 7)
    } else if (viewMode === "month") {
      newDate.setMonth(currentDate.getMonth() - 1)
    }
    setCurrentDate(newDate)
  }

  // Navigate to next period (day, week, or month)
  const goToNext = () => {
    const newDate = new Date(currentDate)
    if (viewMode === "day") {
      newDate.setDate(currentDate.getDate() + 1)
    } else if (viewMode === "week") {
      newDate.setDate(currentDate.getDate() + 7)
    } else if (viewMode === "month") {
      newDate.setMonth(currentDate.getMonth() + 1)
    }
    setCurrentDate(newDate)
  }

  // Go to today
  const goToToday = () => {
    setCurrentDate(new Date())
  }

  // Sample events data
  const events: Event[] = [
    {
      id: 1,
      title: "Web Development Lecture",
      course: "Web Development Fundamentals",
      start: new Date(2025, 3, 24, 10, 0), // April 24, 2025, 10:00 AM
      end: new Date(2025, 3, 24, 11, 30), // April 24, 2025, 11:30 AM
      type: "lecture",
      location: "Room 101",
      color: "bg-blue-100 text-blue-800 border-blue-300",
    },
    {
      id: 2,
      title: "JavaScript Final Project Due",
      course: "Web Development Fundamentals",
      start: new Date(2025, 3, 26, 23, 59), // April 26, 2025, 11:59 PM
      end: new Date(2025, 3, 26, 23, 59),
      type: "assignment",
      color: "bg-red-100 text-red-800 border-red-300",
    },
    {
      id: 3,
      title: "Data Structures Lab",
      course: "Data Structures & Algorithms",
      start: new Date(2025, 3, 25, 14, 0), // April 25, 2025, 2:00 PM
      end: new Date(2025, 3, 25, 16, 0), // April 25, 2025, 4:00 PM
      type: "lab",
      location: "Computer Lab 3",
      color: "bg-green-100 text-green-800 border-green-300",
    },
    {
      id: 4,
      title: "Machine Learning Study Group",
      course: "Machine Learning Basics",
      start: new Date(2025, 3, 24, 16, 0), // April 24, 2025, 4:00 PM
      end: new Date(2025, 3, 24, 18, 0), // April 24, 2025, 6:00 PM
      type: "study",
      location: "Library Study Room 5",
      color: "bg-purple-100 text-purple-800 border-purple-300",
    },
    {
      id: 5,
      title: "Database Design Quiz",
      course: "Database Systems",
      start: new Date(2025, 3, 27, 13, 0), // April 27, 2025, 1:00 PM
      end: new Date(2025, 3, 27, 14, 0), // April 27, 2025, 2:00 PM
      type: "exam",
      location: "Exam Hall 2",
      color: "bg-yellow-100 text-yellow-800 border-yellow-300",
    },
    {
      id: 6,
      title: "Office Hours: Prof. Johnson",
      course: "Web Development Fundamentals",
      start: new Date(2025, 3, 28, 10, 0), // April 28, 2025, 10:00 AM
      end: new Date(2025, 3, 28, 12, 0), // April 28, 2025, 12:00 PM
      type: "office_hours",
      location: "Faculty Building, Room 203",
      color: "bg-indigo-100 text-indigo-800 border-indigo-300",
    },
    {
      id: 7,
      title: "AI Ethics Discussion",
      course: "Machine Learning Basics",
      start: new Date(2025, 3, 29, 15, 0), // April 29, 2025, 3:00 PM
      end: new Date(2025, 3, 29, 16, 30), // April 29, 2025, 4:30 PM
      type: "discussion",
      location: "Room 105",
      color: "bg-pink-100 text-pink-800 border-pink-300",
    },
  ]

  // Filter events for the current day
  const getDayEvents = (date: Date): Event[] => {
    return events.filter(
      (event) =>
        event.start.getDate() === date.getDate() &&
        event.start.getMonth() === date.getMonth() &&
        event.start.getFullYear() === date.getFullYear(),
    )
  }

  // Check if a date is today
  const isToday = (date: Date): boolean => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  // Format time (e.g., "10:00 AM")
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  // Format time range (e.g., "10:00 AM - 11:30 AM")
  const formatTimeRange = (start: Date, end: Date): string => {
    return `${formatTime(start)} - ${formatTime(end)}`
  }

  return (
    <div className="flex min-h-screen w-full bg-muted/10">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background md:flex">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <BookOpen className="h-5 w-5" />
            <span>EduLearn Platform</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Main</h2>
            <div className="space-y-1">
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="#">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Coursework
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="#">
                  <Code2 className="mr-2 h-4 w-4" />
                  Coding IDE
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="#">
                  <Mail className="mr-2 h-4 w-4" />
                  Mail
                  <Badge className="ml-auto flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs">4</Badge>
                </Link>
              </Button>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Learning</h2>
            <div className="space-y-1">
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/assignments">
                  <FileText className="mr-2 h-4 w-4" />
                  Assignments
                </Link>
              </Button>
              <Button variant="secondary" size="sm" className="w-full justify-start" asChild>
                <Link href="/schedule">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/discussions">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Discussions
                </Link>
              </Button>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Account</h2>
            <div className="space-y-1">
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="#">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="#">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </Button>
            </div>
          </div>
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Jane Doe</span>
              <span className="text-xs text-muted-foreground">jane.doe@example.com</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar trigger */}
      <div className="fixed inset-x-0 top-0 z-20 flex h-14 items-center border-b bg-background px-4 md:hidden">
        <Button variant="outline" size="icon" className="mr-2">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-5 w-5" />
          <span>EduLearn Platform</span>
        </Link>
      </div>

      {/* Main content */}
      <main className="flex-1 md:ml-64">
        <div className="container mx-auto p-4 pt-16 md:p-8 md:pt-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Schedule</h1>
              <p className="text-muted-foreground">Manage your classes, assignments, and events</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" size="sm" onClick={goToToday}>
                Today
              </Button>
              <div className="flex items-center">
                <Button variant="ghost" size="icon" onClick={goToPrevious}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="w-[150px] text-center font-medium">
                  {viewMode === "day"
                    ? formatDate(currentDate)
                    : viewMode === "week"
                      ? `${formatDate(getWeekDates()[0])} - ${formatDate(getWeekDates()[6])}`
                      : currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </div>
                <Button variant="ghost" size="icon" onClick={goToNext}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Select value={viewMode} onValueChange={(value) => setViewMode(value as "day" | "week" | "month")}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="View" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                </SelectContent>
              </Select>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Event
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              {viewMode === "day" && (
                <div className="p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{formatDate(currentDate)}</h2>
                    <Badge variant={isToday(currentDate) ? "default" : "outline"}>
                      {isToday(currentDate) ? "Today" : formatDayOfWeek(currentDate)}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {getDayEvents(currentDate).length > 0 ? (
                      getDayEvents(currentDate)
                        .sort((a, b) => a.start.getTime() - b.start.getTime())
                        .map((event) => (
                          <div key={event.id} className={`rounded-md border p-3 ${event.color}`}>
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                              <div>
                                <h3 className="font-medium">{event.title}</h3>
                                <p className="text-sm">{event.course}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">
                                  {event.type === "lecture"
                                    ? "Lecture"
                                    : event.type === "lab"
                                      ? "Lab"
                                      : event.type === "assignment"
                                        ? "Assignment"
                                        : event.type === "exam"
                                          ? "Exam"
                                          : event.type === "study"
                                            ? "Study Group"
                                            : event.type === "office_hours"
                                              ? "Office Hours"
                                              : event.type === "discussion"
                                                ? "Discussion"
                                                : "Event"}
                                </Badge>
                              </div>
                            </div>
                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="mr-1 h-4 w-4" />
                                {event.start.getTime() === event.end.getTime()
                                  ? formatTime(event.start)
                                  : formatTimeRange(event.start, event.end)}
                              </div>
                              {event.location && (
                                <div>
                                  <span>📍 {event.location}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="rounded-md border border-dashed p-6 text-center">
                        <p className="text-muted-foreground">No events scheduled for this day</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Event
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {viewMode === "week" && (
                <div className="overflow-x-auto">
                  <div className="min-w-[800px]">
                    <div className="grid grid-cols-7 border-b">
                      {getWeekDates().map((date, index) => (
                        <div key={index} className={`p-2 text-center ${isToday(date) ? "bg-primary/10" : ""}`}>
                          <div className="text-sm font-medium">{formatDayOfWeek(date)}</div>
                          <div
                            className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full mx-auto ${isToday(date) ? "bg-primary text-primary-foreground" : ""}`}
                          >
                            {formatDay(date)}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 min-h-[500px]">
                      {getWeekDates().map((date, dateIndex) => (
                        <div key={dateIndex} className="border-r p-1 last:border-r-0">
                          <div className="space-y-1">
                            {getDayEvents(date)
                              .sort((a, b) => a.start.getTime() - b.start.getTime())
                              .map((event) => (
                                <TooltipProvider key={event.id}>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <div
                                        className={`rounded-sm border px-2 py-1 text-xs cursor-pointer ${event.color}`}
                                      >
                                        <div className="font-medium truncate">{event.title}</div>
                                        <div className="truncate">{formatTime(event.start)}</div>
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="max-w-[300px]">
                                      <div className="space-y-1">
                                        <div className="font-medium">{event.title}</div>
                                        <div className="text-xs">{event.course}</div>
                                        <div className="text-xs flex items-center">
                                          <Clock className="mr-1 h-3 w-3" />
                                          {event.start.getTime() === event.end.getTime()
                                            ? formatTime(event.start)
                                            : formatTimeRange(event.start, event.end)}
                                        </div>
                                        {event.location && (
                                          <div className="text-xs">
                                            <span>📍 {event.location}</span>
                                          </div>
                                        )}
                                      </div>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {viewMode === "month" && (
                <div className="overflow-x-auto">
                  <div className="min-w-[800px]">
                    <div className="grid grid-cols-7 border-b">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                        <div key={index} className="p-2 text-center font-medium">
                          {day}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 grid-rows-6">
                      {getMonthDates().map(({ date, isCurrentMonth }, index) => (
                        <div
                          key={index}
                          className={`min-h-[100px] border-b border-r p-1 last:border-r-0 ${
                            !isCurrentMonth ? "bg-muted/20 text-muted-foreground" : ""
                          } ${isToday(date) ? "bg-primary/10" : ""}`}
                        >
                          <div
                            className={`mb-1 flex h-6 w-6 items-center justify-center rounded-full ${
                              isToday(date) ? "bg-primary text-primary-foreground" : ""
                            }`}
                          >
                            {formatDay(date)}
                          </div>

                          <div className="space-y-1">
                            {getDayEvents(date)
                              .sort((a, b) => a.start.getTime() - b.start.getTime())
                              .slice(0, 3) // Show only first 3 events
                              .map((event) => (
                                <div
                                  key={event.id}
                                  className={`rounded-sm border px-1 py-0.5 text-xs truncate ${event.color}`}
                                >
                                  {formatTime(event.start)} {event.title}
                                </div>
                              ))}

                            {getDayEvents(date).length > 3 && (
                              <div className="text-xs text-muted-foreground">+{getDayEvents(date).length - 3} more</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Your schedule for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events
                    .filter((event) => {
                      const now = new Date()
                      const sevenDaysLater = new Date()
                      sevenDaysLater.setDate(now.getDate() + 7)
                      return event.start >= now && event.start <= sevenDaysLater
                    })
                    .sort((a, b) => a.start.getTime() - b.start.getTime())
                    .slice(0, 5)
                    .map((event) => (
                      <div key={event.id} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                          {event.type === "lecture" ? (
                            <BookOpen className="h-5 w-5 text-primary" />
                          ) : event.type === "lab" ? (
                            <Code2 className="h-5 w-5 text-primary" />
                          ) : event.type === "assignment" ? (
                            <FileText className="h-5 w-5 text-primary" />
                          ) : event.type === "exam" ? (
                            <FileText className="h-5 w-5 text-primary" />
                          ) : event.type === "study" ? (
                            <Users className="h-5 w-5 text-primary" />
                          ) : event.type === "office_hours" ? (
                            <User className="h-5 w-5 text-primary" />
                          ) : event.type === "discussion" ? (
                            <MessageSquare className="h-5 w-5 text-primary" />
                          ) : (
                            <Calendar className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{event.title}</p>
                          <p className="text-xs text-muted-foreground">{event.course}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>
                              {event.start.toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              })}
                              , {formatTime(event.start)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Events
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Schedule Legend</CardTitle>
                <CardDescription>Event types and color coding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                    <span>Lectures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                    <span>Labs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-red-500"></div>
                    <span>Assignments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                    <span>Exams & Quizzes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                    <span>Study Groups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-indigo-500"></div>
                    <span>Office Hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-pink-500"></div>
                    <span>Discussions</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Grid3X3 className="mr-2 h-4 w-4" />
                  Customize View
                </Button>
                <Button variant="outline" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Import Calendar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function Menu(props: MenuProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function Users(props: UsersProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
