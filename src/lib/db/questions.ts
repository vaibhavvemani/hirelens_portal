import clientPromise from "../mongodb";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "questions";

export async function add_questions(questionData: any) {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection(COLLECTION_NAME).insertOne(questionData);
  return result.insertedId;
}

function update_question() {

}

function delete_question() {

}

function get_all_questions() {

}

function get_question_by_id() {

}
