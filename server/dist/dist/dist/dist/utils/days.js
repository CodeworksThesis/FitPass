"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondMonday = exports.nextMonday = exports.dayAfterTomorrow = exports.tomorrow = void 0;
const tomorrow = () => {
    const day = new Date().setHours(0, 0, 0);
    const tomorrow = new Date(day);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
};
exports.tomorrow = tomorrow;
const dayAfterTomorrow = () => {
    const dayAfterTomorrow = new Date((0, exports.tomorrow)());
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);
    return dayAfterTomorrow;
};
exports.dayAfterTomorrow = dayAfterTomorrow;
const nextMonday = () => {
    const day = new Date().setHours(0, 0, 0);
    const nextMonday = new Date(day);
    nextMonday.setDate(nextMonday.getDate() + (((8 - nextMonday.getDay()) % 7) || 7));
    return nextMonday;
};
exports.nextMonday = nextMonday;
const secondMonday = () => {
    const secondMonday = new Date((0, exports.nextMonday)());
    secondMonday.setDate(secondMonday.getDate() + 7);
    return secondMonday;
};
exports.secondMonday = secondMonday;
