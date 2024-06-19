import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app =express();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mangodb is connected")
})
.catch((err)=>{
    console.log(err);
})

app.listen(4000,()=>{
    console.log("backend server is running on 4000 !!!");
})
