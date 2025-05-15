import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const formData = await request.json();

    const driveData = formData["driveData"];

    try {
        NextResponse.json({ message: "Added Drive data to db", driveData}, { status: 200 });
    }
    catch(error) {
        NextResponse.json({ message: "Failed to upload Drive data to db", error}, { status: 500 })
    }

}