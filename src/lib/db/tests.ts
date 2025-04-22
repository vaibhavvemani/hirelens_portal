import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "TESTS";

export async function add_test(test_name: string) {
  const client = await clientPromise;
  const db = client.db()
  const result = await db
    .collection(COLLECTION_NAME)
    .insertOne(test_name);

  return result.insertId;


}

