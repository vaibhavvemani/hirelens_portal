import { Resume } from "@/types/resume";
  
  const resumes: Resume[] = [
    {
      id: 1,
      name: "Software Engineer",
      description: "Resume for software engineer dev role",
      file: "http://localhost:3000/resume/dummy.pdf",
      aiscore: 88,
      dateUpdated: new Date("2024-03-15"),
      default: true
    },
    {
      id: 2,
      name: "Product Manager",
      description: "Resume for project manager role",
      file: "http://localhost:3000/resume/Sam_Resume_Dev.pdf",
      aiscore: 75,
      dateUpdated: new Date("2024-04-22"),
      default: false
    },
    {
      id: 2,
      name: "Product Manager",
      description: "Resume for project manager role",
      file: "http://localhost:3000/resume/Sam_Resume_Dev.pdf",
      aiscore: 75,
      dateUpdated: new Date("2024-04-22"),
      default: false
    },

  ];
  
  export default resumes;