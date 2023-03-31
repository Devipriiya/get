import mongoose from "mongoose";
const getSchema=mongoose.Schema({
    name:String,
   rollno:Number,
})
const Get=mongoose.model("Get",getSchema);
export default Get;