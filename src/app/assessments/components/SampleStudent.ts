import { AssignedTests, TestsTaken } from "@/types/studentTest";

const sampleAssignedTests: AssignedTests = {
  studentId: "1NH22AI147",
  assignedTests: [
    { testUid: 1001, status: "completed", dueDate: new Date("2025-05-21") },
    { testUid: 1002, status: "completed", dueDate: new Date("2025-05-22") },
    { testUid: 1003, status: "completed", dueDate: new Date("2025-05-23") },
    { testUid: 1004, status: "pending", dueDate: new Date("2025-05-29") },
    { testUid: 1005, status: "pending", dueDate: new Date("2025-05-25") },
    { testUid: 1006, status: "pending", dueDate: new Date("2025-05-26") },
    { testUid: 1007, status: "pending", dueDate: new Date("2025-05-27") },
    { testUid: 1008, status: "pending", dueDate: new Date("2025-05-28") },
    { testUid: 1009, status: "pending", dueDate: new Date("2025-05-29") },
    { testUid: 1010, status: "pending", dueDate: new Date("2025-05-30") },
    { testUid: 1011, status: "pending", dueDate: new Date("2025-05-30") },
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
