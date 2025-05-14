import { NextRequest, NextResponse } from "next/server";
import { Question } from "@/types/question";
import { add_questions, update_question, delete_question} from "@/lib/db/questions";

export async function POST(request: NextRequest) {
    const formData = await request.json();
    const {
    formCategory,
    formTopic,
    formDifficulty,
    formText, 
    formQuestionType,
    formMarks,
    formOptionType,
    formOption_1,
    formOption_2,
    formOption_3, 
    formOption_4,
    formAnswer 
    } = formData


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

    if (formData["option_5"]) {
        questionData.options.option_5 = formData["option_5"];
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
    const {
        formId,
        formCategory,
        formTopic,
        formDifficulty,
        formText, 
        formQuestionType,
        formMarks,
        formOptionType,
        formOption_1,
        formOption_2,
        formOption_3, 
        formOption_4,
        formAnswer 
    } = formData

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

    if (formData["option_5"]) {
        questionData.options.option_5 = formData["option_5"];
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
    const id = formData["id"];

    try {
        const result = await delete_question(id);
        return NextResponse.json( { message: "Question deleted", result }, { status: 200 });
    }
    catch(error) {
        console.error("Error deleting question in db: ", error);
        return NextResponse.json( { message: "Error deleting question in db", error }, { status: 500 });
    }
}