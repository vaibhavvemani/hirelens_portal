import { NextRequest, NextResponse } from "next/server";
import { Question } from "@/types/question";
import { add_questions, update_question, delete_question} from "@/lib/db/questions";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { topic, catagory, difficulty, text, options, answer } = body;

    const questionData: Question = {
        topic: topic,
        category: catagory,
        difficulty: difficulty,
        text: text,
        options: {
            option_1: options.option_1,
            option_2: options.option_2,
            option_3: options.option_3,
            option_4: options.option_4
        },
        answer: answer
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
    const body = await request.json();
    const { id, questionData } = body;

    try {
        const result = await update_question(id, questionData);
        return NextResponse.json( { message: "Question updated", result }, { status: 200 });
    }
    catch(error) {
        console.error("Error updating question in db: ", error);
        return NextResponse.json( { message: "Error updating question in db", error }, { status: 500 });
    }

}

export async function DELETE(request: NextRequest) {
    const body = await request.json();
    const { id } = body;

    try {
        const result = await delete_question(id);
        return NextResponse.json( { message: "Question deleted", result }, { status: 200 });
    }
    catch(error) {
        console.error("Error deleting question in db: ", error);
        return NextResponse.json( { message: "Error deleting question in db", error }, { status: 500 });
    }
}