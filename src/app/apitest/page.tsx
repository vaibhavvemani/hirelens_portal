"use client"
import React from 'react';

function Page() {

  async function handleAddQuestion() {

    const formData = new FormData();
    formData.append("category", "aptitude");
    formData.append("topic", "percentages");
    formData.append("difficulty", "easy");
    formData.append("text", "Who is mahesh babu?");
    formData.append("questionType", "mcq");
    formData.append("marks", "1");
    formData.append("optionType", "single");
    formData.append("option_1", "The G.O.A.T");
    formData.append("option_2", "KING");
    formData.append("option_3", "SUPER STAR");
    formData.append("option_4", "THE MAN");
    formData.append("answer", "option_1");


    const resp = await fetch("api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: formData
    })

    console.log(resp);
  }

  async function handleUpdateQuestion() {
    const formData = new FormData();
    formData.append("category", "aptitude");
    formData.append("topic", "percentages");
    formData.append("difficulty", "easy");
    formData.append("text", "Who is mahesh babu?");
    formData.append("questionType", "mcq");
    formData.append("marks", "1");
    formData.append("optionType", "single");
    formData.append("option_1", "The G.O.A.T");
    formData.append("option_2", "KING");
    formData.append("option_3", "SUPER STAR");
    formData.append("option_4", "Babulake Baabu");
    formData.append("answer", "option_1");

    formData.append("id", "6818e173b5297858c626b966");

    const resp = await fetch("api/questions", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: formData 
    })

    console.log(resp);

  }

  async function handleDeleteQuestion() {
    const id = "6818e44d31d3fb2f5cfec5cc";
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
        _id: "681a0a46c5bc0f2023c319e1", 
        category: "quantitative"
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