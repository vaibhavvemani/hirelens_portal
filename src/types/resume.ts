export interface Resume {
    id: number;
    name: string;
    description?: string;
    file: string;
    atsscore: number;
    default: boolean;
    dateUpdated: Date;
  }