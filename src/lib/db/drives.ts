import clientPromise from "@/lib/mongodb";
import { Drive } from "@/types/drives";
import { ObjectId } from "mongodb";

const DB_NAME = "company";
const COLLECTION_NAME = "drive"

export async function add_drive(driveData: Drive) {
    const client = await clientPromise;
    const db = client.db(DB_NAME)
    const result = await db
        .collection(COLLECTION_NAME)
        .insertOne(driveData)
    
    return result.acknowledged;
}

export async function update_drive(id: string, driveData: Drive) {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const result = await db
        .collection(COLLECTION_NAME)
        .updateOne({ _id: new ObjectId(id)}, { $set: driveData})
    
    return result.acknowledged;
}