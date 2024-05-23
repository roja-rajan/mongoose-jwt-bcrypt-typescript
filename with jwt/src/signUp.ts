import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "./Users";
type userBody = {
  name: string;
  password: string;
  div: number;
  grade: string;
};
var student: userBody = { name: "", password: "", div: 0, grade: "" };
var signup = async (req: Request, res: Response, next: () => void) => {
  try {
    var user: userBody = req.body;
    var check = await User.find({ name: user.name });
    if (check == null) {
      student = req.body;
      student.password = await bcrypt.hash(user.password, 10);
      res.send("signup successfully");
    } else {
      res.send("username already exists").status(500);
    }
  } catch (err) {
    console.log(err);
    res.send("error occured while signing up").status(500);
  }
  next();
};

export { signup, student };
