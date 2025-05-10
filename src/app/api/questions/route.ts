import { NextRequest, NextResponse } from "next/server";
import { Question } from "@/types/question";
import { add_questions, update_question, delete_question} from "@/lib/db/questions";

export async function POST(request: NextRequest) {
    const formData = await request.json();
    const formCategory = formData.get("category");
    const formTopic = formData.get("topic");
    const formDifficulty = formData.get("difficulty");
    const formText = formData.get("text");
    const formQuestionType = formData.get("questionType");
    const formMarks = formData.get("marks");
    const formOptionType = formData.get("optionType");
    const formOption_1 = formData.get("option_1");
    const formOption_2 = formData.get("option_2");
    const formOption_3 = formData.get("option_3");
    const formOption_4 = formData.get("option_4");
    const formAnswer = formData.get("answer");


    const questionData: Question = {
        category: formCategory,
        topic: formTopic,
        difficulty: formDifficulty,
        text: formText,
        questionType: formQuestionType,
        marks: formMarks,
        optionType: formOptionType,
        options: {
            option_1: formOption_1,
            option_2: formOption_2,
            option_3: formOption_3,
            option_4: formOption_4
        },
        answer: formAnswer
    }

    try {
        const result = await add_questions(questionData);
        return NextResponse.json({ message: "Question added successfully", result }, { status: 200 });
    }
    catch(error) {
        console.error("Error adding question to db: ", error);
        return NextResponse.json({ message: "Error adding quesiton to db", error }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    const formData = await request.json();
    const formId = formData.get("id");
    const formCategory = formData.get("category");
    const formTopic = formData.get("topic");
    const formDifficulty = formData.get("difficulty");
    const formText = formData.get("text");
    const formQuestionType = formData.get("questionType");
    const formMarks = formData.get("marks");
    const formOptionType = formData.get("optionType");
    const formOption_1 = formData.get("option_1");
    const formOption_2 = formData.get("option_2");
    const formOption_3 = formData.get("option_3");
    const formOption_4 = formData.get("option_4");
    const formAnswer = formData.get("answer");


    const questionData: Question = {
        category: formCategory,
        topic: formTopic,
        difficulty: formDifficulty,
        text: formText,
        questionType: formQuestionType,
        marks: formMarks,
        optionType: formOptionType,
        options: {
            option_1: formOption_1,
            option_2: formOption_2,
            option_3: formOption_3,
            option_4: formOption_4
        },
        answer: formAnswer
    }

    try {
        const result = await update_question(formId, questionData);
        return NextResponse.json( { message: "Question updated", result }, { status: 200 });
    }
    catch(error) {
        console.error("Error updating question in db: ", error);
        return NextResponse.json( { message: "Error updating question in db", error }, { status: 500 });
    }

}

export async function DELETE(request: NextRequest) {
    const formData = await request.json();
    const id = formData.get("id");

    try {
        const result = await delete_question(id);
        return NextResponse.json( { message: "Question deleted", result }, { status: 200 });
    }
    catch(error) {
        console.error("Error deleting question in db: ", error);
        return NextResponse.json( { message: "Error deleting question in db", error }, { status: 500 });
    }
}