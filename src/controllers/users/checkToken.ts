import Users from "../../models/users"
import { getToken } from "../../services/tokenServ"
import express, { RequestHandler } from "express"
import Jwt from "jsonwebtoken"
const verifyToken: RequestHandler = async (req, res) => {
  if (req.body.token) {
    const token: any = req.headers.authorization

    const check: any = await getToken(token)
    console.log(check)
    if (!check) {
      res.status(401).send("Token is invalid !")
      return
    }

    let payload: any
    try {
      payload = Jwt.verify(token, String(process.env.PRV))
    } catch (e) {
      console.log(e)
      res.status(401).send("Token is invalid !")
      return
    }

    res.status(201).send(payload)
  } else {
    res.status(409).send("Invalid Token !")
  }
}

export default verifyToken
