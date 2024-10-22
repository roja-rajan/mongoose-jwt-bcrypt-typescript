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
exports.student = exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const Users_1 = __importDefault(require("./Users"));
var student = { name: "", password: "", div: 0, grade: "" };
exports.student = student;
var signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var user = req.body;
        var check = yield Users_1.default.find({ name: user.name });
        if (check == null) {
            exports.student = student = req.body;
            student.password = yield bcrypt_1.default.hash(user.password, 10);
            res.send("signup successfully");
        }
        else {
            res.send("username already exists").status(500);
        }
    }
    catch (err) {
        console.log(err);
        res.send("error occured while signing up").status(500);
    }
    next();
});
exports.signup = signup;
