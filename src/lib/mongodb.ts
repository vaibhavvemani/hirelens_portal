import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Could not find MONGODB_URI in the env variables list");
}

const uri = process.env.MONGODB_URI;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    depricationErrors: true,
  },
  tls: true,
};

const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export default clientPromise;