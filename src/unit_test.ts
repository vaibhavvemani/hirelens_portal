import { add_questions } from "./src/lib/db/questions"
import { Question } from "@/types/question";

const question_data: Question = {
  topic: "profit and loss",
  catagory: "quantitative",
  difficulty: "hard",
  text: "What is my name?", 
  options: {
    option_1: "Vaibhav Vemani",
    option_2: "Sahil Salhaj",
    option_3: "Satya Pandey",
    option_4: "Siddney Snakey",
  },
  answer: "option_1"
}

async function run_test() {
  const output = await add_questions(question_data);
  console.log(output);
}

run_test();

