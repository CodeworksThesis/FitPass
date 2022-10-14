import mongoose from "mongoose";
require('dotenv').config();

const DBPATH = process.env.DBPATH;
const DBTest = process.env.DBTEST


async function main() {

  await mongoose.connect(DBPATH!)
  console.log('datbase is connected')
}

main().catch(err => console.log(err))


export default mongoose