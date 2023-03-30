import express,{Express,Request,Response} from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.models"
 require("dotenv").config();

const app = express();

const bodyParser = require('body-parser')

export const regis = async(req:Request,res:Response)=>{
    try {
        
        const { member_name, member_lastname, member_email, member_password,member_tel,member_id } = req.body;
    
        
        if (!(member_email && member_password && member_name && member_lastname && member_tel &&  member_id )) {
          res.status(400).send("All input is required");
        }
    
      
       
        const oldUser = await User.findOne({ member_email });
    
        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
        }
    
        
        
       const encryptedPassword = await bcrypt.hash(member_password, 10);
    
        
        const user = await User.create({
            member_name,
            member_lastname,
            member_email: member_email.toLowerCase(), 
          password: encryptedPassword,
        });
    
        
        const token = jwt.sign(
          { user_id: user._id, member_email },
            "process.env.TOKEN_KEY",
          {
            expiresIn: "2h",
          }
        );
        
        user.token = token;
    
        
        res.status(201).json(user);
      } catch (err) {
        console.log(err);
      }
}

export const login = async(req:Request, res:Response)=>{
   
    try{
        
        const {email,password}=req.body;

        
        if(!(email&&password)){
            res.status(400).send("All input is required");
        }
        
        const user = await User.findOne({ email });

        if(user && (await bcrypt.compare(password,user.member_password))){
            
            const token = jwt.sign(
                {user_id: user._id,email},
                  'Hello',
                {
                    expiresIn: "2h",
                }
            );
            user.token = token;

           
            res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    }catch (err){
        console.log(err);
    }
}
export const welcome = (req:Request,res:Response)=>{
    res.status(200).send("welcome 🐬");
  }

  
export default exports;