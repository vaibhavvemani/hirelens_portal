import { NextResponse } from "next/server";
import { IQuestion } from "@/lib/db/types/QuestionTypes";
import { add_questions } from "@/lib/db/services/QuestionServices";

export async function GET() {
  try {
    const sampleQuestion: Partial<IQuestion> = {
      question: "What is the output of the following JavaScript code: `console.log(typeof null);`?",
      questionType: "mcq",
      topic: "JavaScript Basics",
      category: "Programming",
      difficulty: "easy",
      marks: 5,
      mcqData: {
        optionType: "single",
        options: [
          { id: "1", text: "object", isCorrect: true },
          { id: "2", text: "null", isCorrect: false },
          { id: "3", text: "undefined", isCorrect: false },
          { id: "4", text: "number", isCorrect: false }
        ]
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: "admin_user_id",
      tags: ["javascript", "basics", "typeof"],
      isActive: true
    };

    const savedQuestion = await add_questions(sampleQuestion);

    return NextResponse.json({
      success: true,
      message: "Question added successfully",
      data: savedQuestion
    });
  } catch (error) {
    console.error("Failed to add sample question:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to add question",
        error: (error as Error).message
      },
      { status: 500 }
    );
  }
}

// export async function PUT(request: NextRequest) {
//     const formData = await request.json();
//     const {
//         formId,
//         formCategory,
//         formTopic,
//         formDifficulty,
//         formText, 
//         formQuestionType,
//         formMarks,
//         formOptionType,
//         formOption_1,
//         formOption_2,
//         formOption_3, 
//         formOption_4,
//         formAnswer 
//     } = formData

//     const questionData: Question = {
//         category: formCategory,
//         topic: formTopic,
//         difficulty: formDifficulty,
//         text: formText,
//         questionType: formQuestionType,
//         marks: formMarks,
//         optionType: formOptionType,
//         options: {
//             option_1: formOption_1,
//             option_2: formOption_2,
//             option_3: formOption_3,
//             option_4: formOption_4
//         },
//         answer: formAnswer
//     }

//     if (formData["option_5"]) {
//         questionData.options.option_5 = formData["option_5"];
//     }

//     try {
//         const result = await update_question(formId, questionData);
//         return NextResponse.json( { message: "Question updated", result }, { status: 200 });
//     }
//     catch(error) {
//         console.error("Error updating question in db: ", error);
//         return NextResponse.json( { message: "Error updating question in db", error }, { status: 500 });
//     }

// }

// export async function DELETE(request: NextRequest) {
//     const formData = await request.json();
//     const id = formData["id"];

//     try {
//         const result = await delete_question(id);
//         return NextResponse.json( { message: "Question deleted", result }, { status: 200 });
//     }
//     catch(error) {
//         console.error("Error deleting question in db: ", error);
//         return NextResponse.json( { message: "Error deleting question in db", error }, { status: 500 });
//     }
// }