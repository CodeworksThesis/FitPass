// @ts-nocheck
import express, { response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from '../router'
import User from '../Model/userModel'
import { mockUser } from '../Mocks/mocks'
import request from 'supertest'
import app from '../index'



// testing getUser, postUser, and updateUser


// describe('POST /user endpoint with user details', ()=>{
//   it('POST /user should return the user details with success', async()=>{
// const appRequest =  request(app)
//  const response = await appRequest
//     .post('/user')
//     .send(mockUser)
//     .set('Accept', 'application/json');

//     expect(response.statusCode).toBe(201);
//     expect(response.body.favorites).toMatchObject(['test1', 'test2']);
//     expect(response.body.booked).toMatchObject(['test1', 'test2', 'test3', 'test4'])
//     expect(response.body.profilePic).toBe('localhost//testUser.png');
//   })
// })


// describe('POST /user endpoint without user details', ()=>{
//   it('POST /user should return the 400 error if no user details is provided', async()=>{
//     const appRequest =  request(app)
//     const response = await appRequest
//     .post('/user')
//     .send(null)
//     .set('Accept', 'application/json')

//     console.log(response.statusCode)
//     expect(response.statusCode).toBe(400);
//   })
// })


// describe('GET /user endpoint with user details', ()=>{
//   it('GET /user should return the same user detail from  the POST requests', async()=>{
//     const appRequest =  request(app)
//     const response = await appRequest
//     .get('/user')
//     .send(mockUser)
//     .set('Accept', 'application/json');

//     expect(response.statusCode).toBe(200);

//   })
// })


// describe('GET /user endpoint without user details from POST', ()=>{
//   it('GET /user should return the 400 error if no user details is provided by POST', async()=>{
//     const response = await request(app)
//     .get('/user')
//     .send(undefined)
//     .set('Accept', 'application/json');

//     expect(response.statusCode).toBe(400);
//   })
// })


// describe('PUT /user endpoint with new user details',()=>{
//   it('PUT /user should return the new user details with success', async()=>{
//     const response = await request(app)
//     .post('/user')
//     .send(mockUser)
//     .set('Accept', 'application/json');

//     mockUser._id = response.body._id
//     const newFavorite= 'test123'
//     mockUser.favorites.push(newFavorite)

//     const res = await request(app)
//     .put('/user')
//     .send(mockUser)
//     .set('Accept', 'application/json')

//     expect(res.statusCode).toBe(201);
//     expect(res.body.favorites).toMatchObject(['test1', 'test2', 'test123']);

//   },)
// })

// describe('PUT /user endpoint without new user details', ()=>{
//   it('PUT /user without user details should return a 400 error', async()=>{
//     const response = await request(app)
//     .post('/user')
//     .send(mockUser)
//     .set('Accept', 'application/json');

//     const res = await request(app)
//     .put('/user')
//     .send(mockUser)
//     .set('Accept', 'application/json');

//     expect(response.statusCode).toBe(400);

//   })
// })