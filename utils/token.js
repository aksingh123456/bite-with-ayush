import  jwt from 'jsonwebtoken';
const gentoken = async( userId)=>{
    try{
        return jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'7d'});
    }
    catch (error){
console.log(error)
    }
}
export default gentoken