import { Drive } from "@/types/drives";

export const sampleDrives: Drive[] = [
  {
    driveID: 1,
    company: "Google",
    logo: "/default.png",
    role: "DS Intern",
    type: "Full time",
    location: "Bangalore",
    jobdesc:
      "Google is hiring DS Interns to work on large-scale systems, infrastructure, and cutting-edge web technologies. Candidates should be proficient in C++, Java, or Python and have experience with algorithms and data structures.",
    completeJobDesc: [
      "Design, develop, test, and maintain software solutions for Google's products",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and contribute to technical documentation",
      "Debug and resolve technical issues across the stack",
      "Research and implement new technologies to improve existing systems",
      "Work on data structures and algorithms to solve complex problems",
      "Contribute to open-source projects maintained by Google",
      "Participate in design discussions and architectural decisions",
      "Learn and apply Google's development standards and best practices"
    ],
    prerequisites: "Strong coding skills in C++, Java or Python, data structures & algorithms knowledge, understanding of  CSE fundamentals, ability to work in teams, problem-solving mindset",
    salary: "30000 per month",
    requirements: {
      tenth_grade: "80%",
      twelfth_grade: "80%",
      cgpa: 8.5,
      departments: ["CSE", "ECE", "ISE", "AIML"]
    },
    date: new Date("2025-06-01"),
    lastday: new Date("2025-05-25"),
    tips: [
      "Focus on solving LeetCode medium/hard problems.",
      "Revise data structures like trees, heaps, and graphs.",
      "Practice system design basics.",
      "Be ready with real-world project discussions.",
      "Prepare strong behavioral interview answers (Googleyness).",
      "Mock interview with peers or mentors regularly.",
    ],
    skills: ["Java", "C++", "Python", "Test", "Test"],
    companydetails: {
      description: "Google is a multinational technology company specializing in Internet-related services and products, including online advertising technologies, search engine, cloud computing, software, and hardware.",
      website: "https://www.google.com",
      revenue: "$282.8 billion (2022)",
      address: "Googleplex, 1600 Amphitheatre Parkway, Mountain View, California, U.S."
    },
    duration: "12 months"
  },
  {
    driveID: 2,
    company: "Microsoft",
    logo: "/default.png",
    role: "DS Intern",
    type: "Internship cum Full time",
    location: "Bangalore",
    jobdesc:
      "Microsoft is offering DS Internships for students passionate about building innovative software solutions. The role includes contributing to product development teams and solving real-world engineering challenges.",
    completeJobDesc: [
      "Develop features and components for Microsoft products",
      "Write clean, maintainable code following Microsoft's engineering practices",
      "Participate in agile development processes including sprint planning and reviews",
      "Work on debugging and performance optimization of existing systems",
      "Collaborate with UX designers to implement user interfaces",
      "Contribute to technical documentation and knowledge sharing",
      "Implement automated tests to ensure software quality",
      "Research and prototype new technologies for product improvements",
      "Participate in code reviews and provide constructive feedback",
      "Learn about Microsoft's cloud platform and developer tools"
    ],
    prerequisites: "Proficiency in C++, C# or Python, understanding of software development lifecycle, basic knowledge of databases and operating systems, teamwork skills",
    salary: "28000 per month",
    requirements: {
      tenth_grade: "75%",
      twelfth_grade: "75%",
      cgpa: 8.0,
      departments: ["CSE", "ECE", "ISE", "DS", "AIML"]
    },
    date: new Date("2025-06-10"),
    lastday: new Date("2025-06-03"),
    tips: [
      "Brush up on core CS subjects like OS, DBMS, CN.",
      "Focus on problem-solving in C++, C#, or Python.",
      "Understand the Microsoft Leadership Principles.",
      "Showcase teamwork and innovation in your resume.",
      "Practice technical questions from past interviews.",
      "Work on open-source or personal projects for impact.",
    ],
    skills: ["Java", "C++", "Python", "Test", "Test"],
    companydetails: {
      description: "Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services.",
      website: "https://www.microsoft.com",
      revenue: "$198.3 billion (2022)",
      address: "One Microsoft Way, Redmond, Washington, U.S."
    },
    duration: "12 months"
  },
  {
    driveID: 3,
    company: "Amazon",
    logo: "/default.png",
    role: "Software Development Engineering Intern",
    type: "Internship cum Full time",
    location: "Bangalore",
    jobdesc:
      "Amazon seeks Software Development Engineering Interns with strong problem-solving skills, a good grasp of OOP, and experience in coding using Java, C++, or Python. Expect involvement in scalable services and performance-optimized applications.",
    completeJobDesc: [
      "Contribute to the design and implementation of Amazon's services",
      "Write high-quality, maintainable code for large-scale distributed systems",
      "Participate in operational excellence initiatives for production services",
      "Work on performance optimization and latency reduction",
      "Collaborate with senior engineers on architectural decisions",
      "Implement automated tests and monitoring solutions",
      "Learn about AWS services and cloud architecture patterns",
      "Participate in on-call rotation for production support",
      "Debug and resolve production issues across the stack",
      "Document technical designs and implementation details"
    ],
    prerequisites: "Strong problem-solving skills, object-oriented programming knowledge, familiarity with data structures, ability to work in fast-paced environment",
    salary: "35000 per month",
    requirements: {
      tenth_grade: "80%",
      twelfth_grade: "85%",
      cgpa: 8.2,
      departments: ["CSE", "ECE", "ISE", "DS", "AIML"]
    },
    date: new Date("2025-06-15"),
    lastday: new Date("2025-06-08"),
    tips: [
      "Practice DSA intensively (arrays, strings, trees).",
      "Understand Amazon's Leadership Principles.",
      "Be prepared for behavioral rounds (STAR method).",
      "Learn basics of object-oriented design and OOP.",
      "Projects with scale/real-world users help stand out.",
      "Review past Amazon interview experiences online.",
    ],
    skills: ["Java", "C++", "Python", "Test", "Test"],
    companydetails: {
      description: "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.",
      website: "https://www.amazon.com",
      revenue: "$513.98 billion (2022)",
      address: "410 Terry Avenue North, Seattle, Washington, U.S."
    },
    duration: "12 months"
  },
  {
    driveID: 4,
    company: "Meta",
    logo: "/default.png",
    role: "Software Engineer Intern",
    type: "Full time",
    location: "Bangalore",
    jobdesc:
      "Meta is hiring Software Engineers (Interns) for teams focused on AI, AR/VR, and infrastructure. Candidates should demonstrate problem-solving ability, design skills, and a deep understanding of  CSE fundamentals.",
    completeJobDesc: [
      "Develop features for Meta's family of products (Facebook, Instagram, WhatsApp)",
      "Work on backend services, web interfaces, or mobile applications",
      "Contribute to AI/ML models or AR/VR experiences",
      "Optimize systems for performance and scalability",
      "Participate in hackathons and innovation challenges",
      "Collaborate with data scientists and product managers",
      "Implement A/B tests to measure product impact",
      "Learn about Meta's infrastructure and development tools",
      "Write clean, efficient, and well-documented code",
      "Participate in code reviews and design discussions"
    ],
    prerequisites: "Strong coding skills, understanding of algorithms, familiarity with web/mobile development, passion for social media products, ability to learn quickly",
    salary: "40000 per month",
    requirements: {
      tenth_grade: "85%",
      twelfth_grade: "85%",
      cgpa: 8.6,
      departments: ["CSE", "ECE", "AIML", "ISE"]
    },
    date: new Date("2025-06-20"),
    lastday: new Date("2025-06-12"),
    tips: [
      "Practice frontend and backend problems (React, Node).",
      "Master system design and scalable architecture.",
      "Be prepared to explain impact of your projects.",
      "Understand Meta's company values and mission.",
      "Review topics like GraphQL, REST APIs, etc.",
      "Prepare for cultural and product thinking questions.",
    ],
    skills: ["Java", "C++", "Python", "Test", "Test"],
    companydetails: {
      description: "Meta Platforms, Inc., doing business as Meta, is an American multinational technology conglomerate based in Menlo Park, California, owning Facebook, Instagram, WhatsApp, and other products.",
      website: "https://www.meta.com",
      revenue: "$116.61 billion (2022)",
      address: "1 Hacker Way, Menlo Park, California, U.S."
    },
    duration: "12 months"
  },
  {
    driveID: 5,
    company: "Adobe",
    logo: "/default.png",
    role: "Intern - Creative Tools",
    type: "Internship cum Full time",
    location: "Bangalore",
    jobdesc:
      "Adobe is hiring interns to work on creative tools and digital experiences. The role involves frontend/backend development, UI/UX collaboration, and understanding user needs deeply. Candidates with strong creative and technical skills are preferred.",
    completeJobDesc: [
      "Contribute to Adobe's creative software products (Photoshop, Premiere, etc.)",
      "Implement new features and improve existing functionality",
      "Work on UI components and user experience enhancements",
      "Collaborate with designers and product managers",
      "Optimize performance of creative applications",
      "Participate in user research and feedback sessions",
      "Write automated tests for quality assurance",
      "Learn about Adobe's technology stack and frameworks",
      "Document technical designs and implementation details",
      "Participate in code reviews and team knowledge sharing"
    ],
    prerequisites: "Programming skills in C++/JavaScript, interest in creative software, understanding of UI/UX principles, problem-solving ability",
    salary: "27000 per month",
    requirements: {
      tenth_grade: "75%",
      twelfth_grade: "75%",
      cgpa: 8.0,
      departments: ["CSE", "ECE", "DS", "ISE", "AIML"]
    },
    date: new Date("2025-06-22"),
    lastday: new Date("2025-06-14"),
    tips: [
      "Review Adobe's key product lines and tech stack.",
      "Revise OOP, design patterns, and UI/UX principles.",
      "Strong communication and design thinking help.",
      "Brush up on C++, JavaScript, and any design tools.",
      "Prepare portfolio or GitHub links in resume.",
      "Read up on Adobe's work culture and intern blogs.",
    ],
    skills: ["Java", "C++", "Python", "Test", "Test"],
    companydetails: {
      description: "Adobe Inc. is an American multinational computer software company incorporated in Delaware and headquartered in San Jose, California, known for its creative software products.",
      website: "https://www.adobe.com",
      revenue: "$17.61 billion (2022)",
      address: "345 Park Avenue, San Jose, California, U.S."
    },
    duration: "12 months"
  },
  {
    driveID: 6,
    company: "Flipkart",
    logo: "/default.png",
    role: "E-commerce Intern",
    type: "Internship",
    location: "Bangalore",
    jobdesc:
      "Flipkart's internship program offers hands-on experience in building e-commerce platforms at scale. Interns will work on real-time systems, backend architecture, and user personalization systems.",
    completeJobDesc: [
      "Develop features for Flipkart's e-commerce platform",
      "Work on backend services handling high traffic volumes",
      "Implement personalization and recommendation algorithms",
      "Optimize performance of critical user flows",
      "Collaborate with product teams on feature development",
      "Participate in system design and architecture discussions",
      "Write clean, maintainable, and well-tested code",
      "Learn about microservices and distributed systems",
      "Debug and resolve production issues",
      "Document technical designs and implementation details"
    ],
    prerequisites: "Understanding of web technologies, database knowledge, problem-solving skills, interest in e-commerce domain",
    salary: "25000 per month",
    requirements: {
      tenth_grade: "70%",
      twelfth_grade: "75%",
      cgpa: 7.5,
      departments: ["CSE", "ISE", "ECE", "DS"]
    },
    date: new Date("2025-06-18"),
    lastday: new Date("2025-06-10"),
    tips: [
      "Practice backend-focused questions.",
      "Learn about microservices and event-driven systems.",
      "Understand Flipkart's e-commerce domain challenges.",
      "Focus on writing clean and maintainable code.",
      "Include past internship experiences in resume.",
      "Be familiar with Git, Linux, and Docker basics.",
    ],
    skills: ["Java", "C++", "Python", "Test", "Test"],
    companydetails: {
      description: "Flipkart is an Indian e-commerce company headquartered in Bangalore, Karnataka. It is one of India's leading e-commerce marketplaces, owned by Walmart.",
      website: "https://www.flipkart.com",
      revenue: "$6 billion (2022)",
      address: "Flipkart Internet Private Limited, Bangalore, Karnataka, India"
    },
    duration: "12 months"
  },
  {
    driveID: 7,
    company: "Swiggy",
    logo: "/default.png",
    role: "Logistics Intern",
    type: "Full time",
    location: "Bangalore",
    jobdesc:
      "Swiggy is hiring interns for its logistics and food-tech teams. Expect to work on routing algorithms, real-time tracking, and scalable consumer services. Backend or data engineering experience is a plus.",
    completeJobDesc: [
      "Work on Swiggy's delivery logistics systems",
      "Develop and optimize routing algorithms",
      "Implement real-time tracking features",
      "Build scalable backend services",
      "Analyze and improve delivery partner efficiency",
      "Collaborate with data scientists on predictive models",
      "Participate in system architecture discussions",
      "Write clean, maintainable, and well-documented code",
      "Debug and resolve production issues",
      "Learn about Swiggy's technology stack and tools"
    ],
    prerequisites: "Understanding of algorithms, problem-solving skills, basic knowledge of databases, interest in logistics/supply chain",
    salary: "22000 per month",
    requirements: {
      tenth_grade: "75%",
      twelfth_grade: "75%",
      cgpa: 8.0,
      departments: ["CSE", "ME", "DS"]
    },
    date: new Date("2025-06-30"),
    lastday: new Date("2025-06-24"),
    tips: [
      "Focus on DSA and real-time systems problems.",
      "Understand basics of distributed systems.",
      "Read about delivery logistics and optimization.",
      "Showcase strong backend experience in Node/Java.",
      "Be comfortable with databases and SQL queries.",
      "Highlight fast-paced team experience in resume.",
    ],
    skills: ["Java", "C++", "Python", "Test", "Test"],
    companydetails: {
      description: "Swiggy is an Indian online food ordering and delivery platform headquartered in Bangalore. It provides food delivery from partner restaurants in over 500 cities.",
      website: "https://www.swiggy.com",
      revenue: "$1.02 billion (2022)",
      address: "Swiggy, Auro Center, Bangalore, Karnataka, India"
    },
    duration: "12 months"
  },
  {
    driveID: 8,
    company: "Zomato",
    logo: "/default.png",
    role: "Food-Tech Intern",
    type: "Internship",
    location: "Bangalore",
    jobdesc:
      "Zomato's internship program looks for tech-savvy individuals passionate about food-tech and logistics. Interns work on user behavior analysis, machine learning-based recommendations, and backend systems.",
    completeJobDesc: [
      "Develop features for Zomato's food-tech platform",
      "Work on recommendation and personalization systems",
      "Analyze user behavior and restaurant data",
      "Build scalable backend services",
      "Implement A/B tests for product improvements",
      "Collaborate with data scientists on ML models",
      "Optimize performance of critical user flows",
      "Participate in system design discussions",
      "Debug and resolve production issues",
      "Document technical designs and implementation details"
    ],
    prerequisites: "Programming skills, understanding of data structures, interest in food-tech, problem-solving ability",
    salary: "24000 per month",
    requirements: {
      tenth_grade: "70%",
      twelfth_grade: "70%",
      cgpa: 7.8,
      departments: ["CSE", "AIML", "DS"]
    },
    date: new Date("2025-07-05"),
    lastday: new Date("2025-06-28"),
    tips: [
      "Study food delivery systems and data pipelines.",
      "Practice SQL, Python, and REST APIs.",
      "Highlight ML or recommendation system projects.",
      "Learn about A/B testing and analytics dashboards.",
      "Work on UI/UX design if applying for frontend.",
      "Know Zomato's app and features well.",
    ],
    skills: ["Java", "C++", "Python", "Test", "Test"],
    companydetails: {
      description: "Zomato is an Indian multinational restaurant aggregator and food delivery company founded in 2008. It provides information, menus and user-reviews of restaurants.",
      website: "https://www.zomato.com",
      revenue: "$1 billion (2022)",
      address: "Zomato Limited, Gurugram, Haryana, India"
    },
    duration: "12 months"
  },
  {
    driveID: 9,
    company: "Infosys",
    logo: "/infosys.png",
    role: "Software Development Intern",
    type: "Internship",
    location: "Bangalore",
    jobdesc:
      "Infosys is hiring interns for software development and testing roles. This program focuses on DS foundations, automation, and enterprise-grade tools.",
    completeJobDesc: [
      "Develop software solutions for enterprise clients",
      "Write clean, maintainable code following best practices",
      "Participate in testing and quality assurance",
      "Learn about Infosys' development methodologies",
      "Work on automation scripts and tools",
      "Collaborate with team members on projects",
      "Document technical designs and implementation details",
      "Participate in code reviews",
      "Learn about Infosys' technology stack and tools",
      "Attend training sessions and workshops"
    ],
    prerequisites: "Basic programming knowledge, understanding of software development lifecycle, willingness to learn new technologies",
    salary: "20000 per month",
    requirements: {
      tenth_grade: "65%",
      twelfth_grade: "65%",
      cgpa: 7.5,
      departments: ["CSE", "ISE", "ECE", "MCA"]
    },
    date: new Date("2025-06-12"),
    lastday: new Date("2025-06-05"),
    tips: [
      "Revise basic programming concepts (C/Java).",
      "Be thorough with academic subjects like OS, DBMS.",
      "Practice aptitude and reasoning questions.",
      "Highlight certifications (Java, Python, etc.).",
      "Learn about Infosys Springboard and career tracks.",
      "Review past Infosys online assessment patterns.",
    ],
    skills: ["Java", "C++", "Python", "Test", "Test"],
    companydetails: {
      description: "Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.",
      website: "https://www.infosys.com",
      revenue: "$18.21 billion (2023)",
      address: "Electronics City, Hosur Road, Bangalore, Karnataka, India"
    },
    duration: "12 months"
  },
  {
    driveID: 10,
    company: "TCS",
    logo: "/tcs.png",
    role: "IT Consulting Intern",
    type: "Full time",
    location: "Bangalore",
    jobdesc:
      "TCS is offering internships for students interested in IT consulting and enterprise software. Interns will gain experience in both technical and domain-based projects.",
    completeJobDesc: [
      "Work on IT consulting projects for enterprise clients",
      "Learn about TCS' development methodologies and tools",
      "Participate in requirements gathering and analysis",
      "Develop software solutions following best practices",
      "Create technical documentation",
      "Participate in testing and quality assurance",
      "Attend client meetings and presentations",
      "Learn about specific industry domains",
      "Collaborate with team members on projects",
      "Participate in training sessions and workshops"
    ],
    prerequisites: "Basic programming knowledge, understanding of software development, good communication skills, willingness to learn",
    salary: "18000 per month",
    requirements: {
      tenth_grade: "60%",
      twelfth_grade: "60%",
      cgpa: 7.0,
      departments: ["CSE", "ISE", "ECE", "MCA"]
    },
    date: new Date("2025-07-10"),
    lastday: new Date("2025-07-03"),
    tips: [
      "Prepare for TCS NQT style assessments.",
      "Be confident with basic programming in C/Java.",
      "Practice verbal, aptitude, and reasoning tests.",
      "Get familiar with SDLC and software testing.",
      "Learn about Agile and IT service delivery.",
      "Focus on consistent academic performance.",
    ],
    skills: ["Java", "C++", "Python", "Test", "Test"],
    companydetails: {
      description: "Tata Consultancy Services (TCS) is an Indian multinational information technology (IT) services and consulting company headquartered in Mumbai, part of the Tata Group.",
      website: "https://www.tcs.com",
      revenue: "$27.9 billion (2023)",
      address: "TCS House, Mumbai, Maharashtra, India"
    },
    duration: "12 months"
  },
];