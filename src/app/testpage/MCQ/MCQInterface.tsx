import { useTestStore } from "../zustand/QuestionStore";
import { useAnswersStore } from "../zustand/AnswerStore";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";
import { QuestionOptionKey } from "@/types/question";

const MCQInterface = () => {
  const questions = useTestStore((state) => state.test?.questionIds);
  const questionIndex = useTestStore((state) => state.currentQuestionIndex);
  const checkFlag = useAnswersStore((state) => state.checkFlag)
  const toggleFlag = useAnswersStore((state)=>state.toggleFlag)
  const currentQuestion = questions?.[questionIndex];
  const answers = useAnswersStore((state) => state.answers);
  const updateAnswer = useAnswersStore((state) => state.updateAnswer);
  const deleteAnswer = useAnswersStore((state) => state.deleteAnswer)
  const goToQuestion = useTestStore((state) => state.goToQuestion);

  function formatOption(key: string|null) {
    switch (key) {
      case "option_1":
        return <p>A</p>;
      case "option_2":
        return <p>B</p>;
      case "option_3":
        return <p>C</p>;
      case "option_4":
        return <p>D</p>;
      case "option_5":
        return <p>E</p>;
      default:
        return "";
    }
  }

  function chooseAnswer(key: QuestionOptionKey) {
    if (!currentQuestion) return;
    updateAnswer(currentQuestion.id, currentQuestion.questionType, key);
  }

  function flagQuestion() {
    if (!currentQuestion) return;
    toggleFlag(currentQuestion.id);
  }

  function handleDeselect(){
    if (!currentQuestion) return;
    deleteAnswer(currentQuestion.id);
  }

  function handleNext(){
    if (!currentQuestion) return;
    goToQuestion(questionIndex + 1);
  }
  function handlePrev(){
    if (!currentQuestion) return;
    goToQuestion(questionIndex - 1);
  }


  return (
    <div className="flex w-full gap-3">
      <Card className="w-full flex flex-col p-3 gap-3 justify-between">
        <div className="flex flex-col gap-4">
          <p className="bg-muted w-fit px-4 py-2 rounded-lg font-bold text-accent-foreground">
            Question: {questionIndex + 1}
          </p>
          <p className="font-medium">{currentQuestion?.text}</p>
        </div>
        <div className="flex flex-row gap-3">
          <Button className="flex-1 cursor-pointer" onClick={()=>handlePrev()}>Previous</Button>
          <Button className="flex-1 cursor-pointer"  onClick={()=>handleNext()}>Save and next</Button>
        </div>
      </Card>
      <div className="flex flex-col w-full justify-between gap-2 py-2">
        {currentQuestion?.questionType === "mcq" && currentQuestion.options && (
          <div className="flex flex-col gap-2">
            {(
              Object.entries(currentQuestion.options) as [
                QuestionOptionKey,
                string
              ][]
            ).map(([key, value]) => (
              <div
                key={key}
                className={`p-5 flex justify-between border-2 rounded-sm items-center pr-8 cursor-pointer hover:bg-accent ${
                  answers[currentQuestion.id]?.answer === key
                    ? "border-blue-600 bg-blue-50 text-blue-500"
                    : ""
                }`}
                onClick={() => chooseAnswer(key)}
              >
                <p className="font-medium">{value}</p>
                <h1 className="font-bold text-5xl">{formatOption(key)}</h1>
              </div>
              
            ))}

            {/* remove this after ffs */}
            {/* {currentQuestion && answers[currentQuestion.id] ? (
                <p>Selected: {answers[currentQuestion.id].answer}</p>
            ):(
              <p>No answer</p>
            )} */}
            {/* {Object.entries(answers).map(([questionId, answer]) => (
              <p key={questionId}>{questionId}: {answer.answer}</p>
            ))}*/}
          </div>
        )}
        <div className="flex w-full gap-2">
          <Button className="flex-1 bg-amber-500 hover:bg-amber-600 cursor-pointer" onClick={()=> flagQuestion()}>
            <Flag /> {currentQuestion && checkFlag(currentQuestion.id) ? <p>Unflag</p>:<p>Flag</p> }
          </Button>
          <Button className="flex-1" onClick={()=>handleDeselect()}>Deselect</Button>
        </div>
      </div>
    </div>
  );
};

export default MCQInterface;
