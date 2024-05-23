import mongoose from "mongoose";
import { student } from "./signUp";
import User from "./Users";
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/meradb");
    console.log("Database connected!");
  } catch (err) {
    console.error("Database connection error", err);
  }
};

var insert = async () => {
  try {
    await User.create({
      name: student.name,
      password: student.password,
      div: student.div,
      grade: student.grade,
    });
  } catch (err) {
    console.log(err);
  }
};
export { insert, connectDB };
