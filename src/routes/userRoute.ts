import express from "express"
const userRoute = express.Router()
import postMe from "./../controllers/users/postMe"
import getMe from "./../controllers/users/getMe"
import deleteMe from "./../controllers/users/deleteMe"
userRoute.post("/", postMe)
userRoute.delete("/", deleteMe)
userRoute.get("/", getMe)
export default userRoute
