import exp from 'constants'
import { hasUncaughtExceptionCaptureCallback } from 'process'
import request from 'supertest'
import app from '../index'


describe('Search', () => {

    it('search shoul return the 200 status', async()=>{ 
        const response = await request(app)
        .get(`/search?general=undefined&exerciseType=Yoga,Pilates,Boxing,Running,Cycling,Swimming,Dance,Hiking,Other&location=undefined&price=50&day=`)
        expect(response.statusCode).toBe(200);

        expect(true).toBe(true)
    })
    it('search should return the 400 status if the url do not include required details', async()=>{ 
        const response = await request(app)
        .get(`/search`)
        expect(response.statusCode).toBe(400);
    })     
})
        
    





 