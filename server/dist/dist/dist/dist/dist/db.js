"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const DBPATH = process.env.DBPATH;
const DBTest = process.env.DBTEST;
async function main() {
    await mongoose_1.default.connect(DBPATH);
    console.log('datbase is connected');
}
main().catch(err => console.log(err));
exports.default = mongoose_1.default;
