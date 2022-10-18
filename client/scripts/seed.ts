import mongoose from 'mongoose'
import Post from '../../server/Model/classModel'

mongoose.connect('mongodb+srv:fitpass:block@cluster0.em7odiu.mongodb.net/TestFitPass?retryWrites=true&w=majority',{
  useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=>{
    console.log('mongoose connected to tesitng database')
  })
  .catch((e) => {
    console.log(e);
  });



