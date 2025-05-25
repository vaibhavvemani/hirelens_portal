export interface ProgrammingLanguage {
    id: number; // Judge0 language ID
    name: string; // Display name
    monaco: string; // Monaco language identifier
    extensions: string[]; // File extensions
    judge0Category?: string; // Optional category
  }
  