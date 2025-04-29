import { Progress } from "@/components/ui/progress"

type Score = {
  subject: string
  score: number
}

const latestScores: Score[] = [
  { subject: "Data Structures and Algorithms", score: 90 },
  { subject: "Operating Systems", score: 75 },
  { subject: "Computer Networks", score: 82 },
  { subject: "Databases", score: 88 },
]

const LatestScores = () => {
  return (
    <div className="flex flex-col gap-4 w-full mt-2">
      {latestScores.map((item, index) => (
        <div key={item.subject + index} className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <p className="font-medium">{item.subject}</p>
            <span className="text-sm text-muted-foreground">Score: {item.score}</span>
          </div>
          <Progress value={item.score} />
        </div>
      ))}
    </div>
  )
}

export default LatestScores
