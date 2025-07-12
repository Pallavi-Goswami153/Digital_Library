import mongoose from "mongoose"
import {Admin} from "../model/schema.js"
// import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { connect, disconnect } from "../Config/db.js";
export const adminLogin=async(req,res)=>{
      await connect();
     const { email, password } = req.body;
      console.log(email,password)
      const admin=await Admin.findOne({email});
      if(!admin){
        return res.status(200).json({msg:"Invalid credentials"});
      }
      const isValid = await admin.comparePassword(password);

      if (!isValid) return res.status(200).json({ msg: "Invalid credentials" });
     const token=jwt.sign(
       { email:email},
        process.env.JWT_SECRET,
        {expiresIn:"10s"}
     );
     res.json({token,msg:"Login sucessfully"});
}
export const createAdmin=async(req,res)=>{
    await connect();
    try {
        const newAdmin = new Admin(req.body);
        const { email } = newAdmin;
        const adminExist = await Admin.findOne({ email });
        if (adminExist) {
            return res.status(400).json({ message: "Admin already exist" });
        }
        const savedData = await newAdmin.save();
        // res.status(200).json(savedData);
        res.status(200).json({message:"Admin created sucessfully"});

    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
}