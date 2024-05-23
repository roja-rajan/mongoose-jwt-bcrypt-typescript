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
exports.connectDB = exports.insert = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const signUp_1 = require("./signUp");
const Users_1 = __importDefault(require("./Users"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect("mongodb://localhost:27017/meradb");
        console.log("Database connected!");
    }
    catch (err) {
        console.error("Database connection error", err);
    }
});
exports.connectDB = connectDB;
var insert = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Users_1.default.create({
            name: signUp_1.student.name,
            password: signUp_1.student.password,
            div: signUp_1.student.div,
            grade: signUp_1.student.grade,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.insert = insert;
