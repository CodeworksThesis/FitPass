"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postGymClass = exports.getGymClass = exports.getGymClasses = void 0;
const classModel_1 = __importDefault(require("../Model/classModel"));
const url_1 = __importDefault(require("url"));
const querystring = require('querystring');
const distance_1 = require("../utils/distance");
// initial distance for fetching classes near the user
const DEFAULT_USER_DISTANCE = 50;
const getGymClasses = async (req, res) => {
    try {
        const parsedUrl = url_1.default.parse(req.url);
        const parsedQs = querystring.parse(parsedUrl.query);
        const userLat = parsedQs.latitude;
        const userLong = parsedQs.longitude;
        let query = {
            $and: [{ classDate: { $gte: new Date().toISOString() } }]
            //current data structure doesn't allow distance filter in mongodb
        };
        const classes = await classModel_1.default.find(query);
        // we filter the distance after fetching from mongodb
        let filteredClasses;
        if (userLat && userLong) {
            filteredClasses = classes.filter(item => {
                const distance = (0, distance_1.getDistance)(Number(userLat), Number(userLong), Number(item.latitude), Number(item.longitude), "K");
                return distance <= DEFAULT_USER_DISTANCE;
            });
        }
        else {
            filteredClasses = classes;
        }
        if (!classes.length || !classes) {
            throw new Error('no user found');
        }
        res.status(200);
        res.send({ error: null, data: filteredClasses });
    }
    catch (error) {
        console.log(error);
        res.send({ error: "no gym classes", data: null });
    }
};
exports.getGymClasses = getGymClasses;
const getGymClass = async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const classes = await classModel_1.default.findOne({ id: id });
            res.status(200);
            res.send(classes);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400).send('Sorry we can not find ');
    }
};
exports.getGymClass = getGymClass;
const postGymClass = async (req, res) => {
    try {
        const gym = await req.body;
        const gymClass = await classModel_1.default.create(gym);
        if (!Object.keys(gymClass).length)
            throw new Error('wrong');
        res.status(201);
        res.send(gymClass);
    }
    catch (e) {
        console.log(e);
        res.status(400).end();
    }
};
exports.postGymClass = postGymClass;
