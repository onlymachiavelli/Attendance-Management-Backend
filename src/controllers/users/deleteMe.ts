import Users from "../../models/users"
import express, { RequestHandler } from "express"
import * as userSer from "./../../services/userServ"
import e from "express"
const deleteMe: RequestHandler = async (req, res) => {
  if (req.body.target) {
    const target: any = req.body.target
    userSer
      .getMe(target)
      .then((resp) => {
        res.status(202).send("Done deleting the Target ! ")
      })
      .catch((e) => {
        res.status(409).send(e)
      })
  } else {
    res.status(409).send("User doesn't exist ! ")
    return
  }
}

export default deleteMe
