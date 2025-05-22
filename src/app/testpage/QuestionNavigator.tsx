
import { Card } from "@/components/ui/card"
import { useTestStore } from "./zustand/QuestionStore";
import { Button } from "@/components/ui/button";

const QuestionNavigator = () => {
  const test = useTestStore((state) => state.test);
  const goToQuestion = useTestStore((state)=>state.goToQuestion)
  const currentIndex = useTestStore((state)=>state.currentQuestionIndex)

  return (
    <Card className="flex flex-row justify-center gap-4">
      {
        test?.questionIds.map((question, index)=>(
          <Button key={index} className="cursor-pointer" onClick={() => goToQuestion(index)}>{index + 1}</Button>
        ))
      }
    </Card>
  )
}

export default QuestionNavigator