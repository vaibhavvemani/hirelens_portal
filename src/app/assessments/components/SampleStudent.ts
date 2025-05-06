interface TestResult {
  testUid: number;
  score: number;
  submittedAt: Date;
}

interface TestsTaken {
  studentId: string;
  testsTaken: TestResult[];
}

type TestStatus = "completed" | "pending";

interface AssignedTest {
  testUid: number;
  status: TestStatus;
  dueDate: Date;
}

interface AssignedTests {
  studentId: string;
  assignedTests: AssignedTest[];
}



const sampleTestsTaken: TestsTaken = {
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

const sampleAssignedTests: AssignedTests = {
  studentId: "1NH22AI147",
  assignedTests: [
    { testUid: 1001, status: "completed", dueDate: new Date("2025-05-01") },
    { testUid: 1002, status: "completed", dueDate: new Date("2025-05-02") },
    { testUid: 1003, status: "completed", dueDate: new Date("2025-05-03") },
    { testUid: 1004, status: "pending", dueDate: new Date("2025-05-04") },
    { testUid: 1005, status: "pending", dueDate: new Date("2025-05-05") },
    { testUid: 1006, status: "pending", dueDate: new Date("2025-05-06") },
    { testUid: 1007, status: "pending", dueDate: new Date("2025-05-07") },
    { testUid: 1008, status: "pending", dueDate: new Date("2025-05-08") },
    { testUid: 1009, status: "pending", dueDate: new Date("2025-05-09") },
    { testUid: 1010, status: "pending", dueDate: new Date("2025-05-10") },
  ],
};


export default sampleAssignedTests