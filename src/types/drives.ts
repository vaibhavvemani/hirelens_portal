export type Drive = {
    company: string;
    logo: string;
    jobdesc: string;
    salary: string;
    requirements: Requirements
    date: Date;
    lastday: Date;
    tips: string;
  };

  
  type Requirements = {
    tenth_grade: string;
    twelfth_grade: string;
    cgpa: number;
  };
