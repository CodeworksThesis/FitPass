import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './router'
import {Request, Response} from 'express'

const PORT = process.env.PORT || 3001
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
require('dotenv').config();

const { auth } = require('express-oauth2-jwt-bearer');

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
export const checkJwt = auth({
  audience: 'fitpassuniqueid',
  issuerBaseURL: `https://fitpass.eu.auth0.com/`,
});

// app.get('/user', checkJwt, async (req:Request, res:Response) => {

//   console.log(req)
//   if(req.auth){
//     req.auth.userId = req.auth.payload.sub.split("|")[1]
//     console.log(req.auth.userId)
//   }
// mongoose.connect('mongodb+srv://siclari98:block@cluster0.ggbkn4d.mongodb.net/?retryWrites=true&w=majority')

const atlasUri = process.env.ATLAS_URI || ''

mongoose.connect(atlasUri);

const connection = mongoose.connection;
connection.once('open', () => console.log('Database connection successful🍃'))

app.listen(PORT, ()=>{
  console.log(`server started at http://localhost:${PORT}`)
})


export default app