// @ts-nocheck
import { mockClass  } from '../Mocks/mocks'
import request from 'supertest'
import app from '../index'


const appRequest =  request(app)

describe('POST /gymclass endpoint with user details', ()=>{

  it('POST /gymclass should return the user details with success', async()=>{
 const response = await appRequest
    .post('/gymclass')
    .send(mockClass)
    .set('Accept', 'application/json');

    expect(response.statusCode).toBe(201);
    expect(response.body.studioName).toBe('testStudio');
    expect(response.body.exerciseName).toBe('testExercise')
    expect(response.body.location).toBe('testLocation')
    expect(response.body.longitude).toBe(111)
    expect(response.body.latitude).toBe(111)
    // expect(response.body.classDate).toBe(Date.now())
    expect(response.body.exerciseType).toBe('testExerciseType')
    expect(response.body.price).toBe('testPrice')
    expect(response.body.postPic).toBe('testPic');
  })
})


describe('POST /gymclass endpoint without user details', ()=>{
  it('POST /gymclass should return the 400 error if no user details is provided', async()=>{
    const response = await appRequest
    .post('/gymclass')
    .send(null)
    .set('Accept', 'application/json')
    expect(response.statusCode).toBe(400);
  })
})


describe('GET /gymclass endpoint with user details', ()=>{
  it('GET /gymclass should return the same user detail from  the POST requests', async()=>{
    const response = await appRequest
    .get('/user')
    .send(mockClass)
    .set('Accept', 'application/json');

    expect(response.statusCode).toBe(200);
  })
})


describe.only('GET /gym endpoint without user details from POST', ()=>{
  it('GET /gym should return the 400 error if no user details is provided by POST', async()=>{
    const response = await request(app)
    .get(`/gymclass/${}`)
    .send(null)
    .set('Accept', 'application/json');

    expect(response.statusCode).toBe(400);
  })
})

