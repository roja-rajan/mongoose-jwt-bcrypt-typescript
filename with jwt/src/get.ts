import { Request, Response } from "express";
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
var get = async (req: Request, res: Response, next: () => void) => {
  try {
    var authheader: string | undefined = req.headers["authorization"];
    if (authheader == undefined) {
      res.send("heaaaaader undefined");
    }
    var token: string | undefined = authheader?.split(" ")[1];
    if (secret_key != undefined && token != undefined) {
      jwt.verify(token, secret_key, async (err, data) => {
        if (err) {
          res.status(500).send("you can not access data");
        } else {
          res.send(data);
          //   var name = req.query.name as string;
          //   if (!name) {
          //     return res.status(400).send("Username query parameter is missing.");
          //   }
          //   var user = await User.find({ name: name });
          //   res.json(user);

          next();
        }
      });
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
export { get };
