interface TestResult {
  testUid: number;
  score: number;
  submittedAt: Date;
}

export interface TestsTaken {
  studentId: string;
  testsTaken: TestResult[];
}

type TestStatus = "completed" | "pending";

interface AssignedTest {
  testUid: number;
  status: TestStatus;
  dueDate: Date;
}

export interface AssignedTests {
  studentId: string;
  assignedTests: AssignedTest[];
}
