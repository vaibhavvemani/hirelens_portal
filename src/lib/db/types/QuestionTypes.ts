import mongoose from "mongoose";

// Base interfaces
export interface MCQData {
    optionType: "single" | "multiple";
    options: {
        id: string;
        text: string;
        isCorrect: boolean;
    }[];
}

export interface CodingData {
    language: "javascript" | "python" | "java" | "c";
    starterCode?: string;
    solution?: string;
    testCases: {
        input: string;
        expectedOutput: string;
        isHidden: boolean;
    }[];
    timeLimit: number;
    memoryLimit: number;
}

// Main document interface
export interface IQuestion {
    question: string;
    questionType: "mcq" | "coding" | "true_false" | "fill_in_the_blank";
    topic: string;
    category: string;
    difficulty: "easy" | "medium" | "hard";
    marks: number;
    mcqData?: MCQData;
    codingData?: CodingData;
    createdAt: Date;
    updatedAt: Date;
    createdBy?: string;
    tags: string[];
    isActive: boolean;
}

// Virtual properties interface
export interface IQuestionVirtuals {
    correctAnswers: string[] | null;
}

// Methods interface (for future instance methods)
// export interface IQuestionMethods {
//     // Example: isExpired(): boolean;
// }

// Complete document type
export type QuestionDocument = mongoose.Document<unknown, object, IQuestion> & 
    IQuestion & 
    IQuestionVirtuals //&
    // IQuestionMethods;
