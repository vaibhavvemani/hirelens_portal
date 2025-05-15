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


type Importance = "high" | "medium" | "low" | "none";

type role = "HOD" | "Professor" 