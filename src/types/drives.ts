export type Drive = {
    driveID: number,
    company: string;
    logo: string;
    role: string,
    type: placementType,
    jobdesc: string;
    salary: string;
    duration: string;
    requirements: Requirements,
    prerequisites: string,
    completeJobDesc: string[],
    date: Date;
    lastday: Date;
    tips: string[];
    location: string;
    companydetails: company;
    skills?: string[]
  };

  
  type Requirements = {
    tenth_grade: string;
    twelfth_grade: string;
    cgpa: number;
    departments: departments[]
  };

  export type departments = "AIML" | "ECE" | "CSE" | "DS" | "ME" | "ISE" | "ME" | "MCA"

  type placementType = "Full time" | "Internship" | "Internship cum Full time"

  type company = {
    description: string,
    website: string,
    revenue: string,
    address: string
  }