import { departments } from "@/types/drives";

interface Student {
    usn: string; 
    name: string;
    email: string;
    phone: string;
    department: departments;
    academicDetails: academicDetails;
    optedDrives: {
      driveId: number; 
      applicationStatus: 'applied' | 'shortlisted' | 'rejected' | 'offered';
    }[];
  }
  
  // Sample student data
  export const sampleStudent: Student = {
    usn: "1NH22AI143",
    name: "Tips Salhaj",
    email: "tips.salhaj@example.com",
    phone: "+919876543210",
    department: "AIML",
    academicDetails: {
      tenthGrade: 85,
      twelfthGrade: 88,
      cgpa: 8.7,
      currentSemester: 6,
      college: "New Horizon College of Engineering"
    },
    optedDrives: [
      {
        driveId: 1, 
        applicationStatus: "applied",
      },
      {
        driveId: 2,
        applicationStatus: "shortlisted",
      }
    ]
  };


  type academicDetails = {
    tenthGrade: number; 
    twelfthGrade: number; 
    cgpa: number;
    currentSemester: number;
    college: string;
  };