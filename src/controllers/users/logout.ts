import express, { RequestHandler } from "express"
import Jwt from "jsonwebtoken"
import BlackListedTokens from "../../models/blackListedTokens"
import { killToken } from "../../services/tokenServ"
const LogOut: RequestHandler = async (req, res) => {
  if (req.body.token) {
    const token: any = req.body.token

    killToken(token)
      .then((resp) => {
        console.log("Done killing the token ! ")
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const token: any = Jwt.sign(
    {
      isAuthed: false,
      datas: null,
    },
    String(process.env.PRV)
  )
  res.status(200).send({ token })
}

export default LogOut
