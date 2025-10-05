import express from "express";
import connectDB from "./db.js";
const app = express();

app.use(express.json());
// Teacher View Route
app.get("/teacher-view", async (req, res) => {
  let myDB = await connectDB();
  let teacherCollection = myDB.collection("teacher");
  const data = await teacherCollection.find().toArray();
  res.status(200).json({ msg: "Teacher List", data });
});

// Techer Insert Route
app.post("/teacher-insert", async (req, res) => {
  let myDB = await connectDB();
  let mamCollection = myDB.collection("teachers");

  const { tName, tEmail, tPhone } = req.body;
  const newTeacher = { tName, tEmail, tPhone };
  const insertRes = await mamCollection.insertOne(newTeacher);
  res.status(200).json({ msg: "Teacher insert Complete", data: insertRes });
});

app.listen(8000, () => {
  console.log("App in 8000");
});
