export type Teacher = {
  id: string;
  name: string;
  role: role;
  avatar?: string;
};

export type Circular = {
  id: string;
  importance: Importance
  title: string;
  date: Date;
  authorName: string;
  teacher: Teacher;
  content: string;
};


export type Importance = "high" | "medium" | "low" | "none";

type role = "HOD" | "Professor" 


export type ThreadRole = 'teacher' | 'student';

export type AssignmentThread = {
  assignmentID: number;
  assignmentName: string;
  threads: {
    role: ThreadRole;
    name: string;
    avatar: string | '/default.png';
    message: string;
    timestamp: Date;
  }[];
};