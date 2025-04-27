import { Card, CardTitle } from "@/components/ui/card"

const Overview = () => {
  return (
    <div className="flex w-full justify-between space-x-4">
      <Card className="flex-1 flex-col">
        <p className="text-sm font-bold leading-none">Courses Started</p>
        <h3>6</h3>
      </Card>
      <Card className="flex-1">
        <p className="text-sm font-bold leading-none">Assignments</p>
      </Card>
      <Card className="flex-1">
        <p className="text-sm font-bold leading-none">Average Score</p>
      </Card>
      <Card className="flex-1">
        <p className="text-sm font-bold leading-none">Study Time</p>
      </Card>
    </div>
  )
}

export default Overview