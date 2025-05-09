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
    questionIds?: Question[];
    category: string[];
    duration: number;
    topics?: Topic[];
}
