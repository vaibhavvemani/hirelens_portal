"use client"
import React from 'react';
// import { useState } from 'react';
import { add_questions } from '@/lib/db/questions';
// import { QuestionOptionKey } from '@/types/question';

function Page() {
  // const [topic, setTopic] = useState("");
  // const [catagory, setCatagory] = useState<"quantitative" | "verbal" | "technical">();
  // const [difficulty, setDifficulty] = useState("");
  // const [text, setText] = useState("");
  // const [option_1, setOption1] = useState("");
  // const [option_2, setOption2] = useState("");
  // const [option_3, setOption3] = useState("");
  // const [option_4, setOption4] = useState("");
  // const [answer, setAnswer] = useState("");

  function handleAddQuestion() {

    const questionData = {
      topic: "seomthing",
      catagory: "quantitative",
      difficulty: "hard",
      text: "What is the capital of France?",
      options: {
        option_1: "Paris",
        option_2: "Longdon",
        option_3: "New York",
        option_4: "Tokyo"
      },
      answer: "option_1"
    }
    add_questions(questionData)
      .then((result) => { 
        console.log("Question added successfully", result);
      })

  }
  return (
    <div>
      {/* <input type="text" onChange={e => setTopic(e.target.value)} />
      <input type="text"/>
      <input type="text" onChange={e => setDifficulty(e.target.value)} />
      <input type="text" onChange={e => setText(e.target.value)} />
      <input type="text" onChange={e => setOption1(e.target.value)} />
      <input type="text" onChange={e => setOption2(e.target.value)} />
      <input type="text" onChange={e => setOption3(e.target.value)} />
      <input type="text" onChange={e => setOption4(e.target.value)} />
      <input type="text" onChange={e => setAnswer(e.target.value)} /> */}
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  )
}

export default Page;