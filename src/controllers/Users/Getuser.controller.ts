import * as userServ from "./../../services/user.services"
import express, { RequestHandler } from "express"

const getUser: RequestHandler = async (req, res) => {
  //get Method !
  /*
        req : id , username , one  ,all 


    */

  if (req.query) {
    if (req.query.all) {
      const datas: any = userServ.getAll()

      res.status(200).send(datas)
    } else {
      //getting the target
      //by the id !
      let target: any =
        req.query.by === "username"
          ? await userServ.getByuser(req.query.target)
          : await userServ.getOne(req.query.target)
      target =
        req.query.by === "email"
          ? await userServ.getByEmail(req.query.target)
          : target

      target =
        req.query.by === "phone" ? userServ.getByPhone(req.query.phone) : target

      if (target) {
        res.status(200).send(target)
        return
      }
      res.status(404).send("User is not found ! ")
    }
  } else {
    res.status(409).send("Invalid Datas !")
    return
  }
}

export default getUser
