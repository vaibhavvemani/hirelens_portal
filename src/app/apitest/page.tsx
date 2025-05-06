"use client"
import React from 'react';

function Page() {

  async function handleAddQuestion() {
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

    const resp = await fetch("api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(questionData)
    })
    .then((res) => {
      if (res.ok) {
        console.log("Question added successfully");
        return res.json();
      } else {
        throw new Error("Failed to add question");
      }
    })

    console.log(resp);
  }

  async function handleUpdateQuestion() {
    const questionData = {
      topic: "seomthing",
      catagory: "quantitative",
      difficulty: "hard",
      text: "Who are you?",
      options: {
        option_1: "Mahesh Babu",
        option_2: "Allu Arjun",
        option_3: "Prabhas",
        option_4: "NTR"
      },
      answer: "option_1"
    }
    const id = "6818e173b5297858c626b966"
    const resp = await fetch("api/questions", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, questionData }) 
    })

    console.log(resp);

  }

  async function handleDeleteQuestion() {
    const id = "6818e173b5297858c626b966";
    const data = await fetch("api/questions", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id })
    })

    const resp = await data.json();
    console.log(resp);
  }

  async function handleGetQuestion() {
    const data = await fetch("api/questions/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: "6818e173b5297858c626b966", 
        topic: "aptitude"
      })
    })

    const resp = await data.json();
    console.log(resp);
  }
  return (
    <div>
      <button onClick={handleAddQuestion}>Add Question</button>
      <button onClick={handleUpdateQuestion}>Update Question</button>
      <button onClick={handleDeleteQuestion}>Delete Question</button>
      <button onClick={handleGetQuestion}>Get Question</button>
    </div>
  )
}

export default Page;