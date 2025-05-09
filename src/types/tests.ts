import {Question} from "@/types/question";

export type Topic = {
    name: string;
    easy: number;
    medium: number;
    hard: number;
}

export interface Test {
    name: string;
    desc: string;
    duration: number;
    category: string[];
    topics?: Topic[];
    questionIds?: Question[];
}
