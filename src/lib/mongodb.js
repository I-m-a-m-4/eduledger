import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb+srv://d90375053:wiiUdCcv57SOam4L@freetier.qpkkzxy.mongodb.net/?appName=FreeTier"; // free tier db

if (!uri) {
  throw new Error("MONGODB_URI is not set in environment variables");
}

let client;
let clientPromise;

// Reuse the client across hot reloads in dev
if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function getDb() {
  const client = await clientPromise;
  const dbName = process.env.MONGODB_DB || "eduledger";
  return client.db(dbName);
}