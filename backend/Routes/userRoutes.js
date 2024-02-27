import express  from "express";
import { allUsers, authUser, registerUser } from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.route('/').post(registerUser).get(protect,allUsers)
userRouter.post('/login',authUser)

export default userRouter; 