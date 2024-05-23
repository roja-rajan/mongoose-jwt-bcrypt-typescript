import express, { Request, Response, response } from "express";
import bcrypt from "bcrypt";
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
    student.name = req.body.name;
    student.password = await bcrypt.hash(user.password, 10);
    res.status(200).send("Signup successful");
  } catch (err) {
    console.log(err);
    res.send("error occured").status(500);
  }
  next();
};

export { signup, student };
