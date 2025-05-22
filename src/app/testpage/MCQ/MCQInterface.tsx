import React from 'react'
import { useTestStore } from '../zustand/QuestionStore'

const MCQInterface = () => {
    const questions = useTestStore((state)=>state.test?.questionIds)
    const questionIndex = useTestStore((state)=>state.currentQuestionIndex)
  return (
    <div>{questions?.[questionIndex]?.text}</div>
  )
}

export default MCQInterface