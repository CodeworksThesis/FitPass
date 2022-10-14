import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './router'
const PORT = process.env.PORT || 3001
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
require('dotenv').config();

const atlasUri = process.env.ATLAS_URI || ''

mongoose.connect(atlasUri);

const connection = mongoose.connection;
connection.once('open', () => console.log('Database connection successful🍃'))

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})

export default app