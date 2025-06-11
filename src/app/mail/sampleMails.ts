import { mail } from "@/types/mail";
// Sample data
const sampleMails: mail[] = [
    {
        id: 1,
        from: {
            id: 101,
            name: "Professor Johnson",
            role: "Faculty",
            image: "/default.png"
        },
        to: [{ studentID: 1001 }, { studentID: 1002 }],
        category:"HRD",
        subject: "CS101 Assignment Deadline Extension",
        message: "Dear students, I hope this message finds you well. I understand that the semester has been challenging for all of us, and I appreciate your hard work and dedication. In light of recent events, I have decided to extend the deadline for Assignment 3 to Friday. I believe this extra time will allow you to produce your best work and showcase your understanding of the course material. Please use this time wisely and reach out if you need any assistance. I am here to support you and want to see you succeed. Best of luck, and I look forward to reading your submissions.",
        date: new Date(2023, 9, 15),
        attachments: [
            {
                id: 1,
                name: "Assignment3_Update.pdf",
                desc: "Updated assignment instructions",
                fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            }
        ]
    },
    {
        id: 2,
        from: {
            id: 102,
            name: "Registrar Office",
            role: "Administration",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1001 }, { studentID: 1003 }, { studentID: 1005 }],
        subject: "Tuition Payment Reminder",
        message: "This is a reminder that your tuition payment for Fall 2023 is due by October 30th.",
        date: new Date(2023, 9, 18)
    },
    {
        id: 3,
        from: {
            id: 103,
            name: "Library Services",
            role: "University Service",
            image: "/default.png"
        },
        to: [{ studentID: 1001 }],
        category:"HRD",
        subject: "Book Due Date Reminder",
        message: "The book 'Advanced Algorithms' you borrowed is due in 3 days. Please renew or return it.",
        date: new Date(2023, 9, 20)
    },
    {
        id: 4,
        from: {
            id: 104,
            name: "Career Center",
            role: "University Service",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1002 }, { studentID: 1004 }],
        subject: "Upcoming Career Fair",
        message: "Join us for the annual Career Fair on November 15th. Over 50 companies will be recruiting!",
        date: new Date(2023, 9, 22),
        attachments: [
            {
                id: 2,
                name: "CareerFair2023.pdf",
                desc: "List of participating companies",
                fileUrl: "/attachments/career_fair.pdf"
            }
        ]
    },
    {
        id: 5,
        from: {
            id: 101,
            name: "Professor Johnson",
            role: "Faculty",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1001 }],
        subject: "Your Assignment Submission",
        message: "I've received your assignment but it appears to be incomplete. Please check and resubmit.",
        date: new Date(2023, 9, 25)
    },
    {
        id: 6,
        from: {
            id: 105,
            name: "Student Health Services",
            role: "University Service",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1003 }],
        subject: "Appointment Confirmation",
        message: "Your appointment with Dr. Smith is confirmed for October 28th at 2:00 PM.",
        date: new Date(2023, 9, 26)
    },
    {
        id: 7,
        from: {
            id: 106,
            name: "IT Helpdesk",
            role: "University Service",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1001 }, { studentID: 1002 }, { studentID: 1003 }, { studentID: 1004 }],
        subject: "Scheduled Maintenance",
        message: "The university portal will be down for maintenance from 2AM to 4AM on October 30th.",
        date: new Date(2023, 9, 27)
    },
    {
        id: 8,
        from: {
            id: 107,
            name: "Professor Williams",
            role: "Faculty",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1001 }],
        subject: "Research Opportunity",
        message: "I noticed your excellent work in class. Would you be interested in joining my research team?",
        date: new Date(2023, 9, 28),
        attachments: [
            {
                id: 3,
                name: "ResearchProject.pdf",
                desc: "Details about the research project",
                fileUrl: "/attachments/research_project.pdf"
            }
        ]
    },
    {
        id: 9,
        from: {
            id: 108,
            name: "Student Council",
            role: "Student Organization",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1001 }, { studentID: 1002 }, { studentID: 1003 }, { studentID: 1004 }, { studentID: 1005 }],
        subject: "Halloween Party Invitation",
        message: "You're invited to our annual Halloween party on October 31st at the Student Union!",
        date: new Date(2023, 9, 29)
    },
    {
        id: 10,
        from: {
            id: 102,
            name: "Registrar Office",
            role: "Administration",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1001 }],
        subject: "Transcript Request Processed",
        message: "Your official transcript request has been processed and mailed to the requested address.",
        date: new Date(2023, 10, 1)
    },
    {
        id: 11,
        from: {
            id: 109,
            name: "Professor Chen",
            role: "Faculty",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1002 }, { studentID: 1004 }],
        subject: "Midterm Grades Posted",
        message: "Midterm grades have been posted to the portal. Please review them and see me during office hours if you have questions.",
        date: new Date(2023, 10, 3)
    },
    {
        id: 12,
        from: {
            id: 110,
            name: "Financial Aid Office",
            role: "Administration",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1001 }],
        subject: "Scholarship Opportunity",
        message: "You may be eligible for the STEM Excellence Scholarship. Click the link to apply.",
        date: new Date(2023, 10, 5),
        attachments: [
            {
                id: 4,
                name: "STEM_Scholarship.pdf",
                desc: "Scholarship application form",
                fileUrl: "/attachments/stem_scholarship.pdf"
            }
        ]
    },
    {
        id: 13,
        from: {
            id: 111,
            name: "Housing Office",
            role: "Administration",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1003 }],
        subject: "Room Change Approved",
        message: "Your request to change dorm rooms has been approved. Your new room assignment is West Hall 204.",
        date: new Date(2023, 10, 7)
    },
    {
        id: 14,
        from: {
            id: 112,
            name: "Professor Adams",
            role: "Faculty",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1005 }],
        subject: "Absence Notification",
        message: "I noticed you missed the last two classes. Please contact me to discuss how to catch up.",
        date: new Date(2023, 10, 9)
    },
    {
        id: 15,
        from: {
            id: 113,
            name: "Alumni Association",
            role: "University Organization",
            image: "/default.png"
        },
        category:"HRD",
        to: [{ studentID: 1001 }, { studentID: 1002 }, { studentID: 1003 }, { studentID: 1004 }, { studentID: 1005 }],
        subject: "Alumni Networking Event",
        message: "Join us for a networking event with successful alumni from your program on November 20th.",
        date: new Date(2023, 10, 12),
        attachments: [
            {
                id: 5,
                name: "AlumniEvent.pdf",
                desc: "Event details and RSVP form",
                fileUrl: "/attachments/alumni_event.pdf"
            }
        ]
    }
];

export default sampleMails;