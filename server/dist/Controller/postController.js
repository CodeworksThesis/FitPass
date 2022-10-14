"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postGymClass = exports.getGymClass = void 0;
const classModel_1 = __importDefault(require("../Model/classModel"));
const getGymClass = async (req, res) => {
    try {
        const classes = await classModel_1.default.find();
        res.status(200);
        res.send(classes);
    }
    catch (e) {
        console.log(e);
        res.status(400);
    }
};
exports.getGymClass = getGymClass;
const postGymClass = async (req, res) => {
    try {
        const classes = await classModel_1.default.create(req.body);
        res.send(classes);
        res.status(201);
    }
    catch (e) {
        console.log(e);
        res.status(400);
    }
};
exports.postGymClass = postGymClass;
