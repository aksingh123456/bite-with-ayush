import mongoose from "mongoose"
const connectdb=async ()=>{
try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("database connected")
}
catch(err){
    console.log("db error")
}
}
export default connectdb