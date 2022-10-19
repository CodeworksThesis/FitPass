"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(router_1.default);
mongoose_1.default.connect('mongodb+srv://siclari98:block@cluster0.ggbkn4d.mongodb.net/?retryWrites=true&w=majority');
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
exports.default = app;
