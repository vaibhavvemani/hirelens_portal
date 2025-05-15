import { AssignmentThread } from "@/types/discussions";

export const sampleDiscussion: AssignmentThread[] = [
    {
      assignmentID: 101,
      assignmentName: "Linear Algebra Problem Set",
      threads: [
        {
          role: "teacher",
          name: "Prof. Johnson",
          avatar: "/avatars/prof-johnson.jpg",
          message: "Please submit your solutions by Friday. Remember to show all your work!",
          timestamp: new Date("2023-10-01T09:15:00")
        },
        {
          role: "student",
          name: "Alex Chen",
          avatar: "/avatars/alex-chen.jpg",
          message: "I'm stuck on problem 3. Can we go over it in class tomorrow?",
          timestamp: new Date("2023-10-01T14:22:00")
        },
        {
          role: "teacher",
          name: "Prof. Johnson",
          avatar: "/avatars/prof-johnson.jpg",
          message: "Yes, we'll review problem 3 at the start of class.",
          timestamp: new Date("2023-10-01T16:45:00")
        }
      ]
    },
    {
      assignmentID: 102,
      assignmentName: "History Research Paper",
      threads: [
        {
          role: "teacher",
          name: "Dr. Williams",
          avatar: "/avatars/dr-williams.jpg",
          message: "The first draft is due next Monday. Minimum 5 pages, double-spaced.",
          timestamp: new Date("2023-10-02T10:00:00")
        },
        {
          role: "student",
          name: "Maria Garcia",
          avatar: "/avatars/maria-garcia.jpg",
          message: "Can we use online sources or only library books?",
          timestamp: new Date("2023-10-02T12:30:00")
        },
        {
          role: "teacher",
          name: "Dr. Williams",
          avatar: "/avatars/dr-williams.jpg",
          message: "You may use online academic sources, but they must be properly cited.",
          timestamp: new Date("2023-10-02T13:15:00")
        }
      ]
    },
    {
      assignmentID: 103,
      assignmentName: "Chemistry Lab Report",
      threads: [
        {
          role: "teacher",
          name: "Dr. Lee",
          avatar: "/avatars/dr-lee.jpg",
          message: "Lab reports should include all raw data and analysis. Submit as PDF.",
          timestamp: new Date("2023-10-03T11:20:00")
        }
      ]
    },
    {
      assignmentID: 104,
      assignmentName: "Literature Analysis Essay",
      threads: [
        {
          role: "teacher",
          name: "Ms. Parker",
          avatar: "/avatars/ms-parker.jpg",
          message: "Choose any poem from our anthology and write a 3-page analysis.",
          timestamp: new Date("2023-10-04T09:00:00")
        },
        {
          role: "student",
          name: "Jamal Brown",
          avatar: "/avatars/jamal-brown.jpg",
          message: "Does the analysis need to include historical context?",
          timestamp: new Date("2023-10-04T15:45:00")
        },
        {
          role: "teacher",
          name: "Ms. Parker",
          avatar: "/avatars/ms-parker.jpg",
          message: "Historical context is recommended but not required for full credit.",
          timestamp: new Date("2023-10-04T16:30:00")
        }
      ]
    },
    {
      assignmentID: 105,
      assignmentName: "Physics Homework #5",
      threads: [
        {
          role: "teacher",
          name: "Prof. Gupta",
          avatar: "/avatars/prof-gupta.jpg",
          message: "Problems 1-10 from chapter 6. Show all calculations.",
          timestamp: new Date("2023-10-05T08:45:00")
        },
        {
          role: "student",
          name: "Sophie Kim",
          avatar: "/avatars/sophie-kim.jpg",
          message: "Will there be partial credit for wrong answers with correct methods?",
          timestamp: new Date("2023-10-05T12:15:00")
        },
        {
          role: "teacher",
          name: "Prof. Gupta",
          avatar: "/avatars/prof-gupta.jpg",
          message: "Yes, I'll give partial credit for correct methodology.",
          timestamp: new Date("2023-10-05T14:00:00")
        }
      ]
    },
    {
      assignmentID: 106,
      assignmentName: "Computer Science Project",
      threads: [
        {
          role: "teacher",
          name: "Mr. Rodriguez",
          avatar: "/avatars/mr-rodriguez.jpg",
          message: "Groups of 3-4 students. Submit your team members by Wednesday.",
          timestamp: new Date("2023-10-06T10:30:00")
        },
        {
          role: "student",
          name: "Ethan Wilson",
          avatar: "/avatars/ethan-wilson.jpg",
          message: "Can we work individually if we prefer?",
          timestamp: new Date("2023-10-06T13:20:00")
        },
        {
          role: "teacher",
          name: "Mr. Rodriguez",
          avatar: "/avatars/mr-rodriguez.jpg",
          message: "No, this is a group project to practice collaboration skills.",
          timestamp: new Date("2023-10-06T15:10:00")
        }
      ]
    },
    {
      assignmentID: 107,
      assignmentName: "Biology Field Study",
      threads: [
        {
          role: "teacher",
          name: "Dr. Chen",
          avatar: "/avatars/dr-chen.jpg",
          message: "Remember to bring your field notebooks and pencils on Friday.",
          timestamp: new Date("2023-10-07T09:00:00")
        }
      ]
    },
    {
      assignmentID: 108,
      assignmentName: "Art Portfolio Submission",
      threads: [
        {
          role: "teacher",
          name: "Ms. Alvarez",
          avatar: "/avatars/ms-alvarez.jpg",
          message: "Portfolios must include 5 original works in different mediums.",
          timestamp: new Date("2023-10-08T11:15:00")
        },
        {
          role: "student",
          name: "Olivia Martinez",
          avatar: "/avatars/olivia-martinez.jpg",
          message: "Does digital art count as one of the mediums?",
          timestamp: new Date("2023-10-08T14:45:00")
        },
        {
          role: "teacher",
          name: "Ms. Alvarez",
          avatar: "/avatars/ms-alvarez.jpg",
          message: "Yes, digital art is acceptable as one of your five mediums.",
          timestamp: new Date("2023-10-08T16:30:00")
        }
      ]
    },
    {
      assignmentID: 109,
      assignmentName: "Economics Case Study",
      threads: [
        {
          role: "teacher",
          name: "Prof. Wilson",
          avatar: "/avatars/prof-wilson.jpg",
          message: "Choose any current economic issue and analyze it using concepts from chapter 4.",
          timestamp: new Date("2023-10-09T10:00:00")
        }
      ]
    },
    {
      assignmentID: 110,
      assignmentName: "French Composition",
      threads: [
        {
          role: "teacher",
          name: "Mme. Dubois",
          avatar: "/avatars/mme-dubois.jpg",
          message: "Écrivez un essai de 300 mots sur votre famille. Utilisez le vocabulaire du chapitre 3.",
          timestamp: new Date("2023-10-10T09:30:00")
        },
        {
          role: "student",
          name: "Noah Smith",
          avatar: "/avatars/noah-smith.jpg",
          message: "Can we write about pets as part of our family?",
          timestamp: new Date("2023-10-10T12:15:00")
        },
        {
          role: "teacher",
          name: "Mme. Dubois",
          avatar: "/avatars/mme-dubois.jpg",
          message: "Oui, les animaux de compagnie peuvent être inclus dans votre description familiale.",
          timestamp: new Date("2023-10-10T14:00:00")
        }
      ]
    }
  ];

export const assignments: assignment = {
    101: "Linear Algebra Problem Set",
    102: "History Research Paper",
    103: "Art Portfolio",
    104: "Biology Lab Report",
    105: "English Essay",
    106: "Computer Science Project",
    107: "Math Quiz",
    108: "Science Fair",
    109: "Economics Case Study",
    110: "French Composition"
  };

  type assignment = {
    [key: number]: string;
  }