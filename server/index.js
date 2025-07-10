import express from "express";
import bodyParser from "body-parser";
import router from "./route/adminRoute.js"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();
const app=express();
app.use(cors())
app.use(bodyParser.json());
const port=process.env.PORT||4000;
app.use("/",router)
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})