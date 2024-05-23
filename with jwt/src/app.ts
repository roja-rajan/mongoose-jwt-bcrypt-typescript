import express, { Request, Response } from "express";
import { signup } from "./signUp";
import { connectDB, insert } from "./connect";
var app = express();
app.use(express.json());
connectDB();
app.post("/signup", signup, insert, (req: Request, res: Response) => {
  res.send("sigup successfull");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
