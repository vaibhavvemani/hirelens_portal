import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { Question, Filter } from "@/types/question"

const DB_NAME = "college_db";
const COLLECTION_NAME = "questions";

export async function add_questions(question_data: Question) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const result = await db
    .collection(COLLECTION_NAME)
    .insertOne(question_data);
  
  client.close();
  return result.insertedId;
}

export async function update_question(id: string, updated_data: Question) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const result = await db
    .collection(COLLECTION_NAME)
    .updateOne( { _id: new ObjectId(id) }, { $set: updated_data})

  client.close();
  return result.acknowledged;
}

export async function delete_question(id: string) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const result = await db
    .collection(COLLECTION_NAME)
    .deleteOne( { _id: new ObjectId(id) } )

  client.close();
  return result.acknowledged;
}

export async function get_questions(filter: Filter) {

  const query:Filter = {}
  if (filter._id) query._id = new ObjectId(filter._id);
  if (filter.topic) query.topic = filter.topic;
  if (filter.category) query.category = filter.category;
  if (filter.difficulty) query.difficulty = filter.difficulty;

  console.log(query);

  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const result = await db
  .collection<Question>(COLLECTION_NAME)
  .find(query)
  .toArray()

  client.close();
  return result;
}