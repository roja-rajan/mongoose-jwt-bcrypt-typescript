import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./Users";
import dotenv from "dotenv";
dotenv.config();
var secret_key: string | undefined = process.env.SECRET_KEY;
type userBody = {
  name: string;
  password: string;
  div: number;
  grade: string;
};
var login = async (req: Request, res: Response, next: () => void) => {
  var user: userBody = req.body;
  var student: userBody | null = await User.findOne({ name: user.name });
  if (student != null) {
    if (!(await bcrypt.compare(user.password, student.password))) {
      res.send("password incorrect").sendStatus(500);
    } else {
      res.send("password correct");
    }
  } else {
    res.send("user not found").sendStatus(500);
  }
  next();
};

export { login };
