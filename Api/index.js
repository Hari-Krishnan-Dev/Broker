import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/user.route.js";
import authrouter from"./routes/auth.route.js"
const app =express();
/// Mongo Connection
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




///Middleware
app.use(express.json())
app.use('/api',router);
app.use('/api/auth', authrouter)

app.use((err,req,res,next)=>{
    const statuscode = err.statuscode || 500;
    const message = err.message || "internal server error"
    return res.json({
        success : false,
        statuscode,
        message 
    })
})


