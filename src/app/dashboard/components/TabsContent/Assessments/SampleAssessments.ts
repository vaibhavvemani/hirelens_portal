// Define a type for an Assessment
export type Assessment = {
    title: string;
    dueDate: Date;
    status: "Due" | "Submitted" | "Overdue";
  };
  
  // 15 sample assessments, 5 of each status
  export const sampleAssessments: Assessment[] = [
    // "due" - next 15 days
    {
      title: "JavaScript Final Project",
      dueDate: new Date(2025, 3, 30), // May 5, 2024
      status: "Due",
    },
    {
      title: "Web Development Fundamentals",
      dueDate: new Date(2025, 4, 8), // May 8, 2024
      status: "Due",
    },
    {
      title: "TypeScript Practice Exercises",
      dueDate: new Date(2025, 4, 10), // May 10, 2024
      status: "Due",
    },
    {
      title: "Advanced React Course",
      dueDate: new Date(2025, 4, 12), // May 12, 2024
      status: "Due",
    },
    {
      title: "Full Stack Developer Test",
      dueDate: new Date(2025, 4, 15), // May 15, 2024
      status: "Due",
    },
  
    // "submitted" - within last year
    {
      title: "Frontend Developer Certification",
      dueDate: new Date(2024, 11, 15), // December 15, 2023
      status: "Submitted",
    },
    {
      title: "Database Design Assignment",
      dueDate: new Date(2024, 9, 22), // October 22, 2023
      status: "Submitted",
    },
    {
      title: "Node.js API Development",
      dueDate: new Date(2024, 8, 20), // September 20, 2023
      status: "Submitted",
    },
    {
      title: "E-commerce Website Project",
      dueDate: new Date(2024, 7, 18), // August 18, 2023
      status: "Submitted",
    },
    {
      title: "Data Structures in JavaScript",
      dueDate: new Date(2024, 6, 28), // July 28, 2023
      status: "Submitted",
    },
  
    // "overdue" - last 6 months
    {
      title: "Build a Portfolio Website",
      dueDate: new Date(2024, 3, 10), // April 10, 2024
      status: "Overdue",
    },
    {
      title: "JavaScript Mastery Exam",
      dueDate: new Date(2023, 2, 15), // March 15, 2024
      status: "Overdue",
    },
    {
      title: "Backend with Express.js",
      dueDate: new Date(2024, 1, 5), // February 5, 2024
      status: "Overdue",
    },
    {
      title: "Chat Application Project",
      dueDate: new Date(2024, 11, 25), // December 25, 2023
      status: "Overdue",
    },
    {
      title: "Next.js Advanced Course",
      dueDate: new Date(2024, 10, 20), // November 20, 2023
      status: "Overdue",
    },
  ];
  