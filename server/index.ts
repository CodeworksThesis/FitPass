import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './router'

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

mongoose.connect('mongodb+srv://siclari98:block@cluster0.ggbkn4d.mongodb.net/?retryWrites=true&w=majority')



app.listen(PORT, ()=>{

  console.log(`server started at http://localhost:${PORT}`)
})