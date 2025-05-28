export interface Assignment {
  id: string;
  title: string;
  professor: string;
  description: string;
  dueDate: Date;
  marks: number;
  type: "IA-1" | "IA-2" | "IA-3" | "Project" | "Lab";
}

export const sampleAssignments: Assignment[] = [
  {
    id: "1",
    title: "Cybersecurity Assignment 1",
    professor: "Prof. John Doe",
    description:
      "This assignment is designed to test your understanding of cybersecurity principles and their applications in real-world scenarios. It covers topics such as threat analysis, risk management, and security protocols.",
    dueDate: new Date("2025-05-27"),
    type: "IA-1",
    marks: 100, // Added marks value
  },
  {
    id: "2",
    title: "Data Structures and Algorithms",
    professor: "Prof. Jane Smith",
    description:
      "Implement various sorting algorithms and analyze their time complexity. Includes practical implementation and theoretical analysis.",
    dueDate: new Date("2025-05-30"),
    type: "IA-2",
    marks: 100, // Added marks value
  },
  {
    id: "3",
    title: "Database Systems Project",
    professor: "Prof. Alan Turing",
    description:
      "Design and implement a relational database for a library management system. ER diagrams and SQL queries required.",
    dueDate: new Date("2025-06-05"),
    type: "Project",
    marks: 100, // Added marks value
  },
  {
    id: "4",
    title: "Machine Learning Lab",
    professor: "Dr. Grace Hopper",
    description:
      "Hands-on exercise with linear regression models. Implement from scratch using Python and compare with scikit-learn.",
    dueDate: new Date("2025-06-02"),
    type: "Lab",
    marks: 100, // Added marks value
  },
  {
    id: "5",
    title: "Operating Systems Assignment",
    professor: "Prof. Linus Torvalds",
    description:
      "Simulate process scheduling algorithms. Write a report comparing FCFS, SJF, and Round Robin approaches.",
    dueDate: new Date("2025-06-07"),
    type: "IA-3",
    marks: 100, // Added marks value
  },
  {
    id: "6",
    title: "Computer Networks Lab",
    professor: "Prof. Vint Cerf",
    description:
      "Packet analysis using Wireshark. Capture and analyze HTTP, TCP, and UDP packets with detailed observations.",
    dueDate: new Date("2025-06-10"),
    type: "Lab",
    marks: 100, // Added marks value
  },
  {
    id: "7",
    title: "Software Engineering IA",
    professor: "Prof. Martin Fowler",
    description:
      "Create UML diagrams for a given case study. Include use case, class, and sequence diagrams with proper documentation.",
    dueDate: new Date("2025-06-15"),
    type: "IA-1",
    marks: 100, // Added marks value
  },
  {
    id: "8",
    title: "Artificial Intelligence Project",
    professor: "Dr. Andrew Ng",
    description:
      "Develop a simple chatbot using natural language processing techniques. Implement basic intent recognition.",
    dueDate: new Date("2025-06-20"),
    type: "Project",
    marks: 100, // Added marks value
  },
  {
    id: "9",
    title: "Cloud Computing Assignment",
    professor: "Prof. Werner Vogels",
    description:
      "Deploy a web application on AWS. Document the architecture, cost analysis, and scalability considerations.",
    dueDate: new Date("2025-06-25"),
    type: "IA-2",
    marks: 100, // Added marks value
  },
  {
    id: "10",
    title: "Mobile App Development Lab",
    professor: "Prof. Tim Cook",
    description:
      "Build a basic Flutter app with Firebase backend. Implement authentication and a simple CRUD interface.",
    dueDate: new Date("2025-06-30"),
    type: "Lab",
    marks: 100, // Added marks value
  },
];
