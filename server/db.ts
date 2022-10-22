import mongoose from "mongoose";
require('dotenv').config();

const DBPATH = process.env.DBPATH;
const DBTest = process.env.DBTEST || 'mongodb+srv://fitpass:block@cluster0.em7odiu.mongodb.net/TestFitPass?retryWrites=true&w=majority'
export let ENV = 'DEV';
async function main() {

  await mongoose.connect(ENV === 'DEV' ? DBPATH! : DBTest)
  console.log('database is connected')
}

main().catch(err => console.log(err))


export default mongoose