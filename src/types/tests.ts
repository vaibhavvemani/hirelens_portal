import {Question} from "@/types/question";

export type Topic = {
    name: string;
    easy?: number;
    medium?: number;
    hard?: number;
}

export type Category = {
    name: string;
    easy?: number;
    medium?: number;
    hard?: number;
}

export interface Test {
    name: string;
    desc: string;
    duration: string;
    category?: Category[];
    topics?: Topic[];
    questionIds?: Question[];
}

