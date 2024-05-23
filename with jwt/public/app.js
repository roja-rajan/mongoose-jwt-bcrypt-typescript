"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signUp_1 = require("./signUp");
const connect_1 = require("./connect");
var app = (0, express_1.default)();
app.use(express_1.default.json());
(0, connect_1.connectDB)();
app.post("/signup", signUp_1.signup, connect_1.insert, (req, res) => {
    res.send("sigup successfull");
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
