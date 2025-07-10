import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
export const connect = async() => {
    const mongourl = process.env.MONGOURL;
     try {
    await mongoose.connect(mongourl);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error occurred while connecting to MongoDB:", err.message);
  }
}
export const disconnect=async()=>{
       try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (err) {
    console.error("Error occurred while disconnecting from MongoDB:", err.message);
  }
}