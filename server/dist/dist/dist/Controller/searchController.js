"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClasses = void 0;
const classModel_1 = __importDefault(require("../Model/classModel"));
const url_1 = __importDefault(require("url"));
const days_1 = require("../utils/days");
const querystring = require('querystring');
const getClasses = async (req, res) => {
    try {
        const parsedUrl = url_1.default.parse(req.url);
        const parsedQs = querystring.parse(parsedUrl.query);
        const exerciseTypes = parsedQs.exerciseType.split(',');
        const day = parsedQs.day.split(',');
        let query = {
            $and: [
                { exerciseType: { $in: exerciseTypes } },
                { price: { $lte: Number(parsedQs.price) } },
                { classDate: { $gte: new Date().toISOString() } }
            ]
        };
        if (parsedQs.general !== 'undefined') {
            query.$and.push({ exerciseName: {
                    //partial text search
                    $regex: parsedQs.general,
                    // case insensitive
                    $options: "i"
                } });
        }
        if (parsedQs.location !== 'undefined') {
            query.$and.push({ location: { $regex: parsedQs.location, $options: "i" } });
        }
        if (parsedQs.day) {
            if (day.includes('Today') && day.includes('Tomorrow')) {
                query.$and.push({ classDate: { $lte: new Date((0, days_1.dayAfterTomorrow)()).toISOString() } });
            }
            else if (day.includes('Today') && day.includes('Next week')) {
                query.$and.push({
                    $or: [
                        // today
                        { classDate: { $lte: new Date((0, days_1.tomorrow)()).toISOString() } },
                        // next week
                        { $and: [
                                { classDate: { $gte: new Date((0, days_1.nextMonday)()).toISOString() } },
                                { classDate: { $lte: new Date((0, days_1.secondMonday)()).toISOString() } },
                            ]
                        }
                    ]
                });
            }
            else if (day.includes('Tomorrow') && day.includes('Next week')) {
                query.$and.push({
                    $or: [
                        // tomorrow
                        { $and: [
                                { classDate: { $lte: new Date((0, days_1.dayAfterTomorrow)()).toISOString() } },
                                { classDate: { $gte: new Date((0, days_1.tomorrow)()).toISOString() } },
                            ]
                        },
                        // next week
                        { $and: [
                                { classDate: { $gte: new Date((0, days_1.nextMonday)()).toISOString() } },
                                { classDate: { $lte: new Date((0, days_1.secondMonday)()).toISOString() } },
                            ]
                        }
                    ]
                });
            }
            else if (day.includes('Today')) {
                query.$and.push({ classDate: { $lte: new Date((0, days_1.tomorrow)()).toISOString() } });
            }
            else if (day.includes('Tomorrow')) {
                query.$and.push({
                    $and: [
                        { classDate: { $lte: new Date((0, days_1.dayAfterTomorrow)()).toISOString() } },
                        { classDate: { $gte: new Date((0, days_1.tomorrow)()).toISOString() } },
                    ]
                });
            }
            else if (day.includes('Next week')) {
                query.$and.push({ $and: [
                        { classDate: { $gte: new Date((0, days_1.nextMonday)()).toISOString() } },
                        { classDate: { $lte: new Date((0, days_1.secondMonday)()).toISOString() } },
                    ]
                });
            }
        }
        const classes = await classModel_1.default.find(query);
        if (!classes.length || !classes) {
            throw new Error('no found');
        }
        res.status(200);
        res.send({ error: null, data: classes });
    }
    catch (error) {
        console.log(error);
        res.status(400);
        res.send({ error: "no results found", data: null });
    }
};
exports.getClasses = getClasses;
