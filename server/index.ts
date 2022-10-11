import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './router'

const PORT = process.env.PORT || 3001
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)


// mongoose.connect('mongodb+srv://siclari98:block@cluster0.ggbkn4d.mongodb.net/?retryWrites=true&w=majority')

const atlasUri = 'mongodb+srv://fitpass:fitpass@cluster0.em7odiu.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(atlasUri);

const connection = mongoose.connection;
connection.once('open', () => console.log('Database connection successful🍃'))

app.listen(PORT, ()=>{
  console.log(`server started at http://localhost:${PORT}`)
})