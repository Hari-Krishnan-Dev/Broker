import express from "express"
const router = express.Router();
import userinfo from "../Controller/user.controller.js";

router.post('/register',userinfo.userRegister)


export default router;