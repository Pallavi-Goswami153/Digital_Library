import express from "express";
import bodyParser from "body-parser";
import router from "./route/adminRoute.js"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
dotenv.config();
const app=express();
app.use(cors({
  origin: "http://localhost:5173",  //  React frontend URL
  credentials: true,               // allow cookies
}));

app.use(cookieParser())
app.use(bodyParser.json());
const port=process.env.PORT||4000;
app.use("/",router)
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})