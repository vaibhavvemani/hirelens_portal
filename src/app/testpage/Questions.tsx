
import { Question } from "@/types/AssessmentType"
interface QuestionComponentProps{
    question: Question
}



const Questions = (question: QuestionComponentProps) => {
  return (
    <div>
        {/* <h1>Question</h1>
      <p>{question.question.statement}</p>
      <p>Option A: {question.question.options.a}</p>
      <p>Option B: {question.question.options.b}</p>
      <p>Option C: {question.question.options.c}</p>
      <p>Option D: {question.question.options.d}</p>
      <p>Correct Option: {question.question.correct_option.value}</p> */}
      <h2 className="text-accent-foreground font-bold font-lg">{question.question.statement}</h2>
    </div>
  )
}

export default Questions