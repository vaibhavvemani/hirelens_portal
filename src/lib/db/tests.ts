import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { Test } from "@/types/tests";

const DB_NAME = "assessment"
const COLLECTION_NAME = "tests";

export async function add_test(test: Test) {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const result = await db
        .collection<Test>(COLLECTION_NAME)
        .insertOne(test)
    
    client.close();
    return result.acknowledged;
}

export async function update_test(id: string, updatedData: Test) {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const result = await db
        .collection<Test>(COLLECTION_NAME)
        .updateOne( { _id: new ObjectId(id) }, { $set: updatedData } )
    
    client.close()
    return result.acknowledged;

}

export async function delete_test(id: string) {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const result = await db
        .collection<Test>(COLLECTION_NAME)
        .deleteOne( { _id: new ObjectId(id) } )
    
    client.close()
    return result.acknowledged;
}

export async function get_test() {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const result = await db
        .collection<Test>(COLLECTION_NAME)
        .find()
        .toArray()
    
    client.close();
    return result;
}