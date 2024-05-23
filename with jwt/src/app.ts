import express, { Request, Response } from "express";
import { signup } from "./signUp";
import { login } from "./login";
import { connectDB, insert } from "./connect";
var app = express();
app.use(express.json());
//connectDB();
app.post("/signup", signup, async (req: Request, res: Response) => {
  await insert();
});
app.post("/login", login, (req: Request, res: Response) => {
  console.log("done login");
});
let connect = async () => {
  await connectDB();
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
};
connect();
