"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockClass = exports.mockUser = void 0;
exports.mockUser = {
    id: '123',
    favorites: ['test1', 'test2'],
    booked: ['test1', 'test2', 'test3', 'test4'],
    profilePic: 'localhost//testUser.png'
};
exports.mockClass = {
    id: '',
    studioName: 'testStudio',
    exerciseName: 'testExercise',
    desc: 'testdesc',
    duration: 1,
    location: 'testLocation',
    longitude: 111,
    latitude: 111,
    classDate: Date.now(),
    exerciseType: 'testExerciseType',
    price: 'testPrice',
    postPic: 'testPic'
};
