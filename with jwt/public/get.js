"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var secret_key = process.env.SECRET_KEY;
var get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var authheader = req.headers["authorization"];
        if (authheader == undefined) {
            res.send("heaaaaader undefined");
        }
        var token = authheader === null || authheader === void 0 ? void 0 : authheader.split(" ")[1];
        if (secret_key != undefined && token != undefined) {
            jsonwebtoken_1.default.verify(token, secret_key, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
                if (err) {
                    res.status(500).send("you can not access data");
                }
                else {
                    res.send(data);
                    //   var name = req.query.name as string;
                    //   if (!name) {
                    //     return res.status(400).send("Username query parameter is missing.");
                    //   }
                    //   var user = await User.find({ name: name });
                    //   res.json(user);
                    next();
                }
            }));
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.get = get;
