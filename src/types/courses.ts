type FileType = "module notes" | "assignment" | "Lab programs" | "other";

interface File {
    id: number;
    name: string;
    description: string;
    dateUploaded: Date;
    file: FileType;
    fileURL: string;
}

export interface Module {
    name: string;
    Files: File[];
    lastUpdated: Date;
    progress: number;
}

export interface Course {
    id: number;
    name: string;
    faculty: string;
    modules: Module[];
}