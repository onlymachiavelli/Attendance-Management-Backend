import Users from "./../../models/users"

import express, { RequestHandler } from "express"
import * as userServ from "./../../services/userServ"
const getMe: RequestHandler = async (req, res) => {
  if (req.query.target) {
    const target: any = req.query.target
    const datas: any = await userServ.getMe(target)
    console.log(target)
    if (datas.length === 0) {
      res.status(404).send("User doen't exist ! ")
    } else {
      res.status(302).send(datas[0])
    }
  } else {
    res.status(409).send("Invalid Given Datas ! ")
  }
}

export default getMe
