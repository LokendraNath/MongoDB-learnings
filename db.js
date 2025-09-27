import { MongoClient } from "mongodb";
let db_url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(db_url);

const connectDB = async () => {
  await client.connect();
  let db = client.db("ExampleDB");
  return db;
};

export default connectDB;
