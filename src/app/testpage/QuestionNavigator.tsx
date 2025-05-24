import { Card } from "@/components/ui/card";
import { useTestStore } from "./zustand/QuestionStore";
import { useAnswersStore } from "./zustand/AnswerStore";
import { Button } from "@/components/ui/button";

const QuestionNavigator = () => {
  const test = useTestStore((state) => state.test);
  const goToQuestion = useTestStore((state) => state.goToQuestion);
  const answers = useAnswersStore((state) => state.answers);

  function handleQuestionColor(ID: string) {
    const answer = answers[ID];
    if (answer?.flag) {
      return "bg-amber-500 text-foreground hover:bg-amber-600";
    } else if (answer && 'questionID' in answer && answer.questionID!=null) {
      return "bg-green-500 text-background hover:bg-green-600";
    } else {
      return "bg-muted text-foreground hover:bg-background";
    }
  }
  

  return (
    <Card className="flex flex-row justify-center gap-4">
      {test?.questionIds.map((question, index) => (
        <Button
          key={index}
          className={`cursor-pointer p-5 text-lg ${handleQuestionColor(question.id)}`}
          onClick={() => goToQuestion(index)}
        >
          {index + 1}
        </Button>
      ))}
    </Card>
  );
};

export default QuestionNavigator;
