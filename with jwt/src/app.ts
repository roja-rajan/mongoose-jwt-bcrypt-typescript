import express, { Request, Response } from "express";
import signup from "./signUp";
var app = express();
app.use(express.json());
app.post("/signup", signup, (req: Request, res: Response) => {
  res.send("error occured").status(500);
});
