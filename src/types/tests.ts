export type Topic = {
    name: string;
    easy: number;
    medium: number;
    hard: number;
}

export type Category = string;

export interface Tests {
    uid: number;
    name: string;
    desc: string;
    category: [Category];
    topics: [Topic];
}
