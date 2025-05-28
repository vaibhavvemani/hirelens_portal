export interface Module {
    name: string;
    progress: number;
  }
  
  export interface Course {
    id: string;
    title: string;
    professor: string;
    moduleCount: number;
    documentCount: number;
    lastUpdated: string;
    modules: Module[];
  }
  
  export const SamplesCourses: Course[] = [
    {
      id: "1",
      title: "Computer Networks",
      professor: "Prof. John Doe",
      moduleCount: 5,
      documentCount: 20,
      lastUpdated: "2 hours ago",
      modules: [
        { name: "Fundamentals", progress: 100 },
        { name: "OSI Model", progress: 100 },
        { name: "TCP/IP", progress: 60 },
        { name: "Security", progress: 0 },
        { name: "Wireless", progress: 0 },
      ],
    },
    {
      id: "2",
      title: "Database Systems",
      professor: "Prof. Jane Smith",
      moduleCount: 6,
      documentCount: 18,
      lastUpdated: "1 day ago",
      modules: [
        { name: "Introduction", progress: 100 },
        { name: "ER Models", progress: 100 },
        { name: "SQL Basics", progress: 80 },
        { name: "Normalization", progress: 30 },
        { name: "Transactions", progress: 0 },
      ],
    },
    {
      id: "3",
      title: "Operating Systems",
      professor: "Prof. Alan Turing",
      moduleCount: 4,
      documentCount: 15,
      lastUpdated: "3 days ago",
      modules: [
        { name: "Processes", progress: 100 },
        { name: "Memory", progress: 70 },
        { name: "File Systems", progress: 20 },
        { name: "Security", progress: 0 },
        { name: "Deadlocks", progress: 0 },
      ],
    },
    {
      id: "4",
      title: "Machine Learning",
      professor: "Dr. Grace Hopper",
      moduleCount: 5,
      documentCount: 22,
      lastUpdated: "5 hours ago",
      modules: [
        { name: "Linear Regression", progress: 100 },
        { name: "Classification", progress: 90 },
        { name: "Neural Networks", progress: 40 },
        { name: "CNN", progress: 10 },
        { name: "RNN", progress: 0 },
      ],
    },
    {
      id: "5",
      title: "Software Engineering",
      professor: "Prof. Martin Fowler",
      moduleCount: 5,
      documentCount: 17,
      lastUpdated: "1 week ago",
      modules: [
        { name: "Requirements", progress: 100 },
        { name: "Design", progress: 100 },
        { name: "Implementation", progress: 50 },
        { name: "Testing", progress: 10 },
        { name: "Maintenance", progress: 0 },
      ],
    },
    {
      id: "6",
      title: "Cybersecurity",
      professor: "Prof. Bruce Schneier",
      moduleCount: 4,
      documentCount: 19,
      lastUpdated: "Yesterday",
      modules: [
        { name: "Cryptography", progress: 100 },
        { name: "Network Security", progress: 80 },
        { name: "Ethical Hacking", progress: 20 },
        { name: "Forensics", progress: 0 },
        { name: "Something bro", progress: 0 },
      ],
    },
  ];