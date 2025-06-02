import { NextRequest, NextResponse } from "next/server";
import { get_test } from "@/lib/db/services/tests";

export async function POST(request: NextRequest) {
    const data = await request.json();

    const searchId = data["id"];

    try {
        const result = await get_test(searchId);
        return NextResponse.json( { message: "Test added succesfully", result }, { status: 200 } );
    }
    catch(error) {
        console.error("Error adding test", error);
        return NextResponse.json( { message: "Error adding test"}, { status: 500 });
    }

}