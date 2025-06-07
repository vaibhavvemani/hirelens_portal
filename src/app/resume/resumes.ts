import { Resume } from "@/types/resume";
  
  const resumes: Resume[] = [
    {
      id: 1,
      name: "Software Engineer",
      description: "Resume for every software engineer dev role",
      file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      aiscore: 88,
      dateUpdated: new Date("2024-03-15"),
      default: true
    },
    {
      id: 2,
      name: "Product Manager",
      description: "Resume for every software engineer dev role",
      file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      aiscore: 75,
      dateUpdated: new Date("2024-04-22"),
      default: false
    },
  ];
  
  export default resumes;