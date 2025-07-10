import { AssignedTests, TestsTaken } from "@/types/studentTest";

const sampleAssignedTests: AssignedTests = {
  studentId: "1NH22AI147",
  assignedTests: [
    { testUid: 1001, status: "completed", dueDate: new Date("2025-07-10") },
    { testUid: 1002, status: "completed", dueDate: new Date("2025-07-11") },
    { testUid: 1003, status: "completed", dueDate: new Date("2025-07-12") },
    { testUid: 1004, status: "pending", dueDate: new Date("2025-07-18") },
    { testUid: 1005, status: "pending", dueDate: new Date("2025-08-14") },
    { testUid: 1006, status: "pending", dueDate: new Date("2025-08-15") },
    { testUid: 1007, status: "pending", dueDate: new Date("2025-07-16") },
    { testUid: 1008, status: "pending", dueDate: new Date("2025-08-17") },
    { testUid: 1009, status: "pending", dueDate: new Date("2025-07-18") },
    { testUid: 1010, status: "pending", dueDate: new Date("2025-08-19") },
    { testUid: 1011, status: "pending", dueDate: new Date("2025-07-19") },
  ],
};


export default sampleAssignedTests

export const sampleTestsTaken: TestsTaken = {
  studentId: "1NH22AI147",
  testsTaken: [
    {
      testUid: 1001,
      score: 8,
      submittedAt: new Date("2025-05-01T14:00:00Z"),
    },
    {
      testUid: 1002,
      score: 7,
      submittedAt: new Date("2025-05-02T15:30:00Z"),
    },
    {
      testUid: 1003,
      score: 10,
      submittedAt: new Date("2025-05-03T16:45:00Z"),
    },
  ],
};
