import mongoose from "mongoose";
import User from "./Users";
mongoose
  .connect("mongodb://localhost:27017/meradb")
  .then(() => {
    console.log("database conneceted!");
  })
  .catch((err) => {
    console.log(err);
  });
