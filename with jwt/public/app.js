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
const express_1 = __importDefault(require("express"));
const signUp_1 = require("./signUp");
const login_1 = require("./login");
const get_1 = require("./get");
const connect_1 = require("./connect");
var app = (0, express_1.default)();
app.use(express_1.default.json());
//connectDB();
app.post("/signup", signUp_1.signup, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connect_1.insert)();
}));
app.post("/login", login_1.login, (req, res) => {
    console.log("done login");
});
app.get("/get", get_1.get, (req, res) => {
    console.log("data got");
});
let connect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connect_1.connectDB)();
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
});
connect();
