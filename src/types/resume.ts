export interface Resume {
    id: number;
    name: string;
    description?: string;
    file: string;
    aiscore: number;
    default: boolean;
    dateUpdated: Date;
  }