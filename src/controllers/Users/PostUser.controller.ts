import { Users } from "../../models/user.entity"

import express, { RequestHandler } from "express"
import * as userServ from "./../../services/user.services"
import bcrypt from "bcrypt"
const PostUser: RequestHandler = (req, res) => {
  //looking for the user
  //const target : any = userServ.getOne()
}

export default PostUser
