import user from "../models/user.model";
import token from "../utils/token";
 export const signup=async(req,res)=>{
    try{
        const {fullname,email,mobile,password,role}=req.body;
        const user=await user.findone({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        if(paswword.length()<6){
            return res.status(400).json({message:"Password must be at least 6 characters"});
        }
        if(mobile.length()<10){
            return res.status(400).json({message:"Mobile number must be at least 10 digits"});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        await user.create({fullname,email,mobile,password:hashedPassword,role});
        const token=await gentoken(user._id);
        res.cookie("token",token,{
            secure:false,
            samesite:"strict",
            maxAge:7*24*60*60*1000,
httpOnly:true,
        });
        res.status(201).json({message:"user created succesfully",user})
        
    }
    catch(error){
return res.status(500).json({message:"signup failed",error:`${error}`})
    }
}
export const signin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await user.findone({email});
        if(!user){
            return res.status(400).json({message:"User doesn't exists"});
        }if(paswword.length()<6){
            return res.status(400).json({message:"Password must be at least 6 characters"})}
        const ismatch=await bcrypt.compare(password,user.password);
        if(!ismatch){
            return res.status(400).json({message:"incorrect password"});
        }
        
        
        const token=await gentoken(user._id);
        res.cookie("token",token,{
            secure:false,
            samesite:"strict",
            maxAge:7*24*60*60*1000,
httpOnly:true,
        });
        res.status(200).json({user})
        
    }
    catch(error){
return res.status(500).json({message:"signin failed",error:`${error}`})
    }
}
export const signout=async(req,res)=>{
    try{
        res.clearCookie("token");
        res.status(200).json({message:"signout successful"})
    }
    catch(error){
return res.status(500).json({message:"signout failed",error:`${error}`})
    }
    }