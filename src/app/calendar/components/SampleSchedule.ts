export type TaskType = "assignment" | "application"

export interface ScheduleItem {
  id: string
  title: string
  type: TaskType
  dueDate: Date
  status: "pending" | "in-progress" | "completed"
  notes?: string
}

export const scheduleItems: ScheduleItem[] = [
  {
    id: "1",
    title: "DSA Assignment 4",
    type: "assignment",
    dueDate: new Date("2025-05-03"),
    status: "in-progress",
    notes: "Focus on dynamic programming section",
  },
  {
    id: "2",
    title: "Apply to Microsoft SWE Internship",
    type: "application",
    dueDate: new Date("2025-05-10"),
    status: "pending",
    notes: "Include resume with latest project",
  },
  {
    id: "3",
    title: "AI Research Paper Review",
    type: "assignment",
    dueDate: new Date("2025-05-06"),
    status: "pending",
    notes: "Summarize key findings and critique methods",
  },
  {
    id: "4",
    title: "Apply to Google STEP Internship",
    type: "application",
    dueDate: new Date("2025-05-12"),
    status: "pending",
  },
  {
    id: "5",
    title: "Operating Systems Project",
    type: "assignment",
    dueDate: new Date("2025-05-08"),
    status: "in-progress",
    notes: "Implement process scheduling simulation",
  },
]
