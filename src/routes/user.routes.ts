import express from "express"

import getUser from "../controllers/Users/Getuser.controller"

import PostUser from "../controllers/Users/PostUser.controller"

const userRouter = express.Router()

userRouter.get("/", getUser)
userRouter.post("/", PostUser)
export default userRouter
