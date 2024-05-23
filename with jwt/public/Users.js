"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    password: String,
    div: Number,
    grade: { type: String, enum: ["A", "B", "C", "D", "E", "F"] },
    //grade: String
});
module.exports = mongoose_1.default.model("Students", userSchema);
