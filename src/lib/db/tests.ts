import clientPromise from "@/lib/mongodb";
import { Test } from "@/types/tests";

const DB_NAME = "college_db"
const COLLECTION_NAME = "tests";

export async function add_test(test: Test) {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const result = await db
        .collection(COLLECTION_NAME)
        .insertOne(test)
    
    client.close();
    return result.insertedId;

}