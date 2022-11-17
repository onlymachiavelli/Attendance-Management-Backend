import express from "express"
import makeAuth from "../controllers/users/auth"
import verifyToken from "../controllers/users/checkToken"
import LogOut from "../controllers/users/logout"
const authRoute = express.Router()

authRoute.post("/", makeAuth)
authRoute.post("/verify", verifyToken)
authRoute.delete("/", LogOut)

export default authRoute
