import { NextRequest, NextResponse } from "next/server"
import { add_test, delete_test, update_test } from "@/lib/db/services/tests";

export async function POST(request: NextRequest) {
    const data = await request.json();

    try {
        const result = await add_test(data);
        return NextResponse.json({ message: "Test added succesfully", result }, { status: 200 });
    }
    catch(error) {
        console.error("Error updating question in db", error);
        return NextResponse.json( { message: "Error adding test to db", error }, { status: 500 })
    }

}

export async function PUT(request: NextRequest) {
    const data = await request.json();
    const id = data["id"];
    const testData = data["updatedTest"];

    try {
        const result = await update_test(id, testData);
        return NextResponse.json( { messsage: "Test updated succesfully", result }, { status: 200 });
    }
    catch(error) {
        console.error("Test update failed: ", error)
        return NextResponse.json( { message: "Test Update Failed", error }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    const data = await request.json();
    const id = data["id"];

    try {
        const result = await delete_test(id);
        return NextResponse.json( { message: "Test deleted succesfully", result}, { status: 200 });
    }
    catch(error) {
        console.error("Test deletion failed", error);
        return NextResponse.json( { message: "Test Deletion failed", error}, { status: 500 });
    }
}