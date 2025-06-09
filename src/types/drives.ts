export type Drive = {
  driveID: number; // remove this later as well
  company: string;
  companydetails: company;
  logo: string;
  completeJobDesc: string[];
  jobdesc: string;
  role: string;
  type: string;
  salary: string;
  duration: string;
  requirements: Requirements;
  prerequisites: string;
  date: Date;
  lastday: Date;
  tips: string[];
  location: string;
  skills?: string[];
};

type Requirements = {
  tenth_grade: string;
  twelfth_grade: string;
  cgpa: number;
  departments: string[];
};

type company = {
  description: string;
  website: string;
  // get rid of these later
  revenue: string;
  address: string;
};
