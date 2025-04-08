import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { Question, Filter } from "@/types/question"

const COLLECTION_NAME = "questions";

export async function add_questions(question_data: Question) {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection(COLLECTION_NAME).insertOne(question_data);

  return result.insertedId;
}

export async function update_question(id: string, updated_data: Question) {
  const client = await clientPromise;
  const db = client.db();

  return await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(id) },
    { $set: updated_data}
  )
}

export async function delete_question(id: string) {
  const client = await clientPromise;
  const db = client.db();

  return await db.collection(COLLECTION_NAME).deleteOne(
    { _id: new ObjectId(id) }
  )
}

export async function get_question_by_id(id: string) {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection(COLLECTION_NAME).findOne(
    { _id: new ObjectId(id)}
  )

  return result;
}

export async function get_questions(filter: Filter) {
  const client = await clientPromise;
  const db = client.db();
  const result = db.collection(COLLECTION_NAME).find(
    {
      topic: filter.topic,
      catagory: filter.catagory,
      difficulty: filter.difficulty,
    }
  )

  return result;
}

