import Categories from "../../models/categories"
import dateFormat from "date-and-time"
import * as catServ from "./../../services/categoryServ"

import experess, { RequestHandler } from "express"

const addCat: RequestHandler = async (req, res) => {
  if (req.body.category && req.body.description && req.body.icon) {
    //get the cat !
    const cat: any = await catServ.getCat(req.body.category)
    if (cat.length > 0) {
      res.status(409).send("Category is already exist ! ")
      return
    }

    const category: any = new Categories()
    const currentDate = new Date()
    const date: any = dateFormat.format(currentDate, "YYYY-MM-DD HH:mm:ss")
    category.addedat = date
    category.category = req.body.category
    category.description = req.body.description
    category.icon = req.body.icon
    catServ
      .addCat(category)
      .then((resp) => {
        res.status(201).send("Done saving the cat !")
      })
      .catch((e) => {
        console.log(category)

        res.status(409).send(e)
      })
  } else {
    res.status(409).send("Invalid Given Datas ! ")
    return
  }
}

export default addCat
