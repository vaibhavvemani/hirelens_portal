
import { Table } from "@/components/ui/table"
import SampleAssessment from "./SampleAssessments"
import sampleAssignedTests from "./SampleStudent"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface AssessmentPageProps{
    value: string
}

function returnAllTests(){
    return sampleAssignedTests
}

function returnPendingAssignments(){
    let tests = sampleAssignedTests.assignedTests.filter(test => test.status === "pending")
    .filter(test => test.dueDate >= new Date())
    return tests
}

function returnOverdueAssignments(){
    let tests = sampleAssignedTests.assignedTests.filter(test=>test.status ==="pending")
    .filter(test => test.dueDate < new Date())
    return tests
}

function returnSubmittedAssignments(){
    let tests = sampleAssignedTests.assignedTests.filter(test=>test.status === "completed")
    return tests
}

const AssessmentPage: React.FC<AssessmentPageProps> = ({ value }) => {
    const tests = 
    value == "all"?
    returnAllTests():
    value == "pending"?
    returnPendingAssignments():
    value == "overdue"?
    returnOverdueAssignments():
    returnSubmittedAssignments()

    
  return (
    <div className='flex flex-col mt-3'>
        {Array.isArray(tests) ? tests.map((test) => (
            <Card key={test.testUid}>
                <p>Test UID: {test.testUid}</p>
                <p>Status: {test.status}</p>
                <p>Due Date: {test.dueDate.toDateString()}</p>
            </Card>
        )) : tests.assignedTests.map((test) => (
            <Card key={test.testUid}>
                <p>Test UID: {test.testUid}</p>
                <p>Status: {test.status}</p>
                <p>Due Date: {test.dueDate.toDateString()}</p>
            </Card>
        ))}
    </div>
  )
}

export default AssessmentPage
