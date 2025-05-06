import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { Question, Filter } from "@/types/question"

const COLLECTION_NAME = "questions";
const DB_NAME = "quiz";

export async function add_questions(question_data: Question) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const result = await db
    .collection(COLLECTION_NAME)
    .insertOne(question_data);

  return result.insertedId;
}

export async function update_question(id: string, updated_data: Question) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);

  return await db
    .collection(COLLECTION_NAME)
    .updateOne( { _id: new ObjectId(id) }, { $set: updated_data})
}

export async function delete_question(id: string) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);

  return await db
    .collection(COLLECTION_NAME)
    .deleteOne( { _id: new ObjectId(id) })
}

export async function get_questions(filter: Filter) {

  const query:Filter = {}
  if (filter._id) query._id = new ObjectId(filter._id);
  if (filter.topic) query.topic = filter.topic;
  if (filter.category) query.category = filter.category;
  if (filter.difficulty) query.difficulty = filter.difficulty;

  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const result = await db
  .collection<Question>(COLLECTION_NAME)
  .find(query)
  .toArray()

  return result;
}