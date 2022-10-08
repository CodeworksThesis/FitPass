import mongoose from "mongoose";
import Class from '../Interfaces/Class'

const Schema = mongoose.Schema


const ClassSchema = new Schema<Class>({
  id:{ type: String, required:true},
  studioName:{type: String, required:true},
  exerciseName:{type: String, required:true },
  desc:{type: String, required:false},
  duration:{type:String, required:false},
  location:{type:String, required:false},
  longitude:{type:Number, required: false},
  latitude:{type:Number, required:false},
  classDate:{type:Date, required:false},
  exerciseType:{type:String, required:false},
  price:{type:String, required: false},
  postPic:{type:String, required:false}

})

const Classes = mongoose.model<Class>('Class', ClassSchema)

export default Classes

