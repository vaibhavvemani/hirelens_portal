import { NextRequest, NextResponse } from "next/server"
import { Test } from "@/types/tests"
import { add_test } from "@/lib/db/tests";

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const formName = formData.get("name");
    const formDesc = formData.get("desc");
    const formDuration = formData.get("duration");
    const formCategory = formData.get("category");
    const formTopic = formData.get("topic");
    const formQuestionId = formData.get("questionIds");

    const testData: Test = {
        name: formName,
        desc: formDesc,
        duration: formDuration,
    }

    if (formCategory) {
        testData["category"] = formCategory;
    }
    if (formTopic) {
        testData["topics"] = formTopic;
    }
    if (formQuestionId) {
        testData["questionIds"] = formQuestionId;
    }

    try {
        const result = await add_test(testData);
        return NextResponse.json({ message: "Test added succesfully", result }, { status: 200 });
    }
    catch(error) {
        console.error("Error updating question in db", error);
        return NextResponse.json( { message: "Error adding test to db", error }, { status: 500 })
    }

}
