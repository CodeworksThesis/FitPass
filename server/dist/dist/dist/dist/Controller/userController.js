"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.postUser = exports.getUser = void 0;
const userModel_1 = __importDefault(require("../Model/userModel"));
const getUser = async (req, res) => {
    try {
        const user = await userModel_1.default.find();
        res.status(200);
        res.send(user);
    }
    catch (e) {
        console.log(e);
        res.status(400);
    }
};
exports.getUser = getUser;
const postUser = async (req, res) => {
    try {
        const user = await req.body;
        console.log(user);
        if (!user || Object.keys(user).length === 0) {
            throw new Error('Details not provided');
        }
        const users = await userModel_1.default.create(req.body);
        res.status(201);
        res.send(users);
    }
    catch (e) {
        console.log(e);
        res.status(400);
    }
};
exports.postUser = postUser;
const updateUser = async (req, res) => {
    try {
        const updates = await userModel_1.default.findOneAndUpdate({ id: req.body.id }, {
            favorites: req.body.favorites,
            booked: req.body.booked,
            profilePic: req.body.profilePic,
        }, { new: true });
        res.status(201);
        res.send(updates);
    }
    catch (e) {
        console.log(e);
        res.status(400);
    }
};
exports.updateUser = updateUser;
