import { NextRequest, NextResponse } from "next/server";
import { get_questions } from "@/lib/db/questions";

export async function POST(request: NextRequest) {
    const data = await request.json();
    try {
        const result = await get_questions(data);
        return NextResponse.json( { message: "Question fetched", result }, { status: 200 });
    }
    catch(error) {
        console.error("Error fetching question from db: ", error);
        return NextResponse.json( { message: "Error fetching question from db", error }, { status: 500 });
    }
}