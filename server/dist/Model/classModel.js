"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const PostSchema = new Schema({
    id: { type: String, required: true },
    studioName: { type: String, required: true },
    exerciseName: { type: String, required: true },
    desc: { type: String, required: true },
    duration: { type: Number, required: true },
    location: { type: String, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    classDate: { type: Date, required: false },
    exerciseType: { type: String, required: true },
    price: { type: Number, required: true },
    postPic: { type: String, required: true }
});
const Post = mongoose_1.default.model('Post', PostSchema);
exports.default = Post;
