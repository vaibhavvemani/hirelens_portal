import { Circular } from "@/types/discussions";


export const sampleCirculars: Circular[] = [
  {
    id: "CIRC-2023-001",
    importance: "high",
    title: "Science Fair Preparation Meeting",
    date: new Date("2023-09-15"),
    authorName: "Dr. Sarah Johnson",
    teacher: {
      id: "TEA-001",
      name: "Dr. Sarah Johnson",
      role: "HOD",
      avatar: "/avatars/sarah-johnson.jpg"
    },
    content: "All science teachers are requested to attend the preparation meeting for the upcoming annual science fair."
  },
  {
    id: "CIRC-2023-002",
    importance: "medium",
    title: "Math Olympiad Team Selection",
    date: new Date("2023-09-18"),
    authorName: "Prof. Robert Chen",
    teacher: {
      id: "TEA-002",
      name: "Prof. Robert Chen",
      role: "Professor",
      avatar: "/avatars/robert-chen.jpg"
    },
    content: "Students interested in participating in the Math Olympiad should submit their applications by Friday."
  },
  {
    id: "CIRC-2023-003",
    importance: "low",
    title: "Parent-Teacher Conference Schedule",
    date: new Date("2023-09-20"),
    authorName: "Ms. Emily Wilson",
    teacher: {
      id: "TEA-003",
      name: "Ms. Emily Wilson",
      role: "Professor",
      avatar: "/avatars/emily-wilson.jpg"
    },
    content: "Parent-Teacher Conferences will be held on the scheduled dates."
  },
  {
    id: "CIRC-2023-004",
    importance: "high",
    title: "Library Book Return Reminder",
    date: new Date("2023-09-22"),
    authorName: "Mr. David Brown",
    teacher: {
      id: "TEA-004",
      name: "Mr. David Brown",
      role: "Professor",
      avatar: "/avatars/david-brown.jpg"
    },
    content: "All overdue library books must be returned by the end of this month to avoid penalties."
  },
  {
    id: "CIRC-2023-005",
    importance: "medium",
    title: "Sports Day Volunteers Needed",
    date: new Date("2023-09-25"),
    authorName: "Coach Michael Rodriguez",
    teacher: {
      id: "TEA-005",
      name: "Coach Michael Rodriguez",
      role: "Professor",
      avatar: "/avatars/michael-rodriguez.jpg"
    },
    content: "Volunteers are needed to help with the upcoming Sports Day event."
  },
  {
    id: "CIRC-2023-006",
    importance: "low",
    title: "Art Exhibition Submissions",
    date: new Date("2023-09-28"),
    authorName: "Ms. Jessica Lee",
    teacher: {
      id: "TEA-006",
      name: "Ms. Jessica Lee",
      role: "Professor",
      avatar: "/avatars/jessica-lee.jpg"
    },
    content: "Students may submit their artwork for the annual exhibition until October 15th."
  },
  {
    id: "CIRC-2023-007",
    importance: "high",
    title: "Computer Lab Maintenance",
    date: new Date("2023-10-01"),
    authorName: "Mr. Alan Turing",
    teacher: {
      id: "TEA-007",
      name: "Mr. Alan Turing",
      role: "Professor",
      avatar: "/avatars/alan-turing.jpg"
    },
    content: "The computer lab will be closed for maintenance on the scheduled date."
  },
  {
    id: "CIRC-2023-008",
    importance: "medium",
    title: "Music Club Auditions",
    date: new Date("2023-10-05"),
    authorName: "Mrs. Sophia Garcia",
    teacher: {
      id: "TEA-008",
      name: "Mrs. Sophia Garcia",
      role: "Professor",
      avatar: "/avatars/sophia-garcia.jpg"
    },
    content: "Auditions for the school choir and band will be held next week in the music room."
  }
];