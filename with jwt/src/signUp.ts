import express, { Request, Response, response } from "express";
import bcrypt from "bcrypt";
type userBody = {
  name: string;
  password: string;
};
var student: userBody = { name: "", password: "" };
var signup = async (req: Request, res: Response, next: () => void) => {
  try {
    var user: userBody = req.body;
    student.name = req.body.name;
    student.password = await bcrypt.hash(user.password, 10);
  } catch (err) {
    console.log(err);
  }
  next();
};

export { signup, student };
