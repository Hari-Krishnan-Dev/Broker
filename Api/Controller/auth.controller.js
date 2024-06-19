
import user from "../models/user.model.js";
import bcryptjs from "bcryptjs";
const signup = async (req,res) => {
    const {username,email,password} =req.body;
    const hashedpwd = bcryptjs.hashSync(password, 10)
    const newUser  =new user({username,email,password:hashedpwd});
    try {
        await newUser.save();
        res.status(201).json({
            message : "registration was success"
        });
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}
export default signup;
