import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

if (!process.env.MONGODB_URI) {
  throw new Error("Could not find MONGODB URI in the env variables list");
}

const client:MongoClient = new MongoClient(uri, options)
const clientPromise:Promise<MongoClient> = client.connect();

export default clientPromise;
