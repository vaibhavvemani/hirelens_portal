// import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Could not find MONGODB_URI in the env variables list");
}

const uri = process.env.MONGODB_URI;
// let isConnected = false;

export const connectDB = async() => {
  // if (isConnected) {
  //   return;
  // }

  try {
    const options = {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      bufferCommands: false,
    };

    await mongoose.connect(uri, options);
    // isConnected = true;
  } catch(error) {
    console.error("Error Connecting to MongoDB: ", error)
    throw error;
  }
}

export default mongoose;

// const options = {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     depricationErrors: true,
//   },
//   tls: true,
// };

// const client = new MongoClient(uri, options);
// const clientPromise = client.connect();

// export default clientPromise;