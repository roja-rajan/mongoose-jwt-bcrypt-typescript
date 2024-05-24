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
};
var login = async (req: Request, res: Response, next: () => void) => {
  try {
    var user: userBody = req.body;
    var student: userBody | null = await User.findOne({ name: user.name });
    if (student != null) {
      if (!(await bcrypt.compare(user.password, student.password))) {
        res.send("password incorrect").sendStatus(500);
      } else {
        if (secret_key != undefined) {
          var token: string = await jwt.sign(user, secret_key, {
            expiresIn: "1m",
          });
          res.send("token : " + token);
        } else {
          res.send("secret key undefined").sendStatus(500);
        }
      }
    } else {
      res.send("user not found").sendStatus(500);
    }
    next();
  } catch (err) {
    console.log(err);
  }
};

export { login };
