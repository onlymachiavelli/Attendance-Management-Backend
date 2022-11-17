import { Users } from "../../models/user.entity"

import express, { RequestHandler } from "express"
import * as userServ from "./../../services/user.services"
import dateFormat from "date-and-time"
import bcrypt from "bcrypt"
const PostUser: RequestHandler = async (req, res) => {
  //checking the datas !

  if (req.body) {
    //looking for the user
    const target: any = userServ.getByuser(req.body.username)

    if (target) {
      res.status(409).send("user name is already exist ! ")
      return
    }

    const currentDate: any = new Date()
    const date: any = dateFormat.format(currentDate.now, "YYYY-MM-DD HH:mm:ss")
    const user = new Users()
    user.fullname = req.body.fullname
    user.email = req.body.email
    user.createdat = date
    user.updatedat = date
    user.phone = req.body.phone

    const saltRounds: number = Number(process.env.SALT)
    user.password = await bcrypt
      .genSalt(saltRounds)
      .then((s) => bcrypt.hash(req.body.password, s))

    userServ
      .postUser(user)
      .then((resp) => {
        res.status(200).send("Done saving the user")
      })
      .catch((e) => {
        res.status(409).send(e)
      })
  } else {
    res.status(409).send("Invalid Datas")

    return
  }
}

export default PostUser
