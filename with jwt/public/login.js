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
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Users_1 = __importDefault(require("./Users"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var secret_key = process.env.SECRET_KEY;
var login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var user = req.body;
        var student = yield Users_1.default.findOne({ name: user.name });
        if (student != null) {
            if (!(yield bcrypt_1.default.compare(user.password, student.password))) {
                res.send("password incorrect").sendStatus(500);
            }
            else {
                if (secret_key != undefined) {
                    var token = yield jsonwebtoken_1.default.sign(user, secret_key, {
                        expiresIn: "1m",
                    });
                    res.send("token : " + token);
                }
                else {
                    res.send("secret key undefined").sendStatus(500);
                }
            }
        }
        else {
            res.send("user not found").sendStatus(500);
        }
        next();
    }
    catch (err) {
        console.log(err);
    }
});
exports.login = login;
