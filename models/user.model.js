import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    mobile:{
        type:Number ,
    required:true   },
    role:{
        type:String,
        enum:["user","owner","deliveryboy"]
    }
},{timestamps:true})
const user=new mongoose.model("user",userSchema)
export default user