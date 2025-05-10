"use client"
import React from 'react';

function Page() {

  async function handleAddQuestion() {

    const formData = new FormData();
    formData.append("category", "aptitude");
    formData.append("topic", "percentages");
    formData.append("difficulty", "something");
    formData.append("text", "Who is mahesh babu?");
    formData.append("questionType", "something");
    formData.append("marks", "1");
    formData.append("optionType", "single");
    formData.append("option_1", "The G.O.A.T");
    formData.append("option_2", "KING");
    formData.append("option_3", "SUPER STAR");
    formData.append("option_4", "THE MAN");
    formData.append("answer", "option_1");


    const resp = await fetch("api/questions", {
      method: "POST",
      body: formData
    })

    console.log(resp);
  }

  async function handleUpdateQuestion() {
    const formData = new FormData();
    formData.append("category", "aptitude");
    formData.append("topic", "profit and loss");
    formData.append("difficulty", "easy");
    formData.append("text", "Who is mahesh babu?");
    formData.append("questionType", "mcq");
    formData.append("marks", "1");
    formData.append("optionType", "single");
    formData.append("option_1", "The G.O.A.T");
    formData.append("option_2", "K>I>N>G");
    formData.append("option_3", "SUPER STAR");
    formData.append("option_4", "Babulake Baabu");
    formData.append("answer", "option_1");

    formData.append("id", "681edd571123bf9de03f0f8e");

    const resp = await fetch("api/questions", {
      method: "PUT",
      body: formData 
    })

    console.log(resp);

  }

  async function handleDeleteQuestion() {

    const formData = new FormData();
    formData.append("id", "681edd901123bf9de03f0f90")
    const resp = await fetch("api/questions", {
      method: "DELETE",
      body: formData
    })

    console.log(resp);
  }

  async function handleGetQuestion() {
    const data = await fetch("api/questions/search", {
      method: "POST",
      body: JSON.stringify({
        category: "aptitude"
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