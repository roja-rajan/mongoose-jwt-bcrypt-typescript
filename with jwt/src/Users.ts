import mongoose from "mongoose";
var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: String,
  div: Number,
  grade: { type: String, enum: ["A", "B", "C", "D", "E", "F"] },
  //grade: String
});

export = mongoose.model("Students", userSchema);
