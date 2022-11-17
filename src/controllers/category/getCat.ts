import Categories from "../../models/categories"
import express, { RequestHandler } from "express"
import * as catServ from "./../../services/categoryServ"

const getAll: RequestHandler = async (req, res) => {
  const datas: any = catServ.getAll()

  if (datas.length > 0) {
    res.status(201).send(datas)
    return
  }
  res.status(404).send("There's no category ! ")
}

const getCat: RequestHandler = async (req, res) => {
  if (req.query.category) {
    const datas: any = await catServ.getCat(req.query.category)
    if (datas.length > 0) {
      res.status(201).send(datas)
    } else {
      res.status(404).send("Category is not found ! ")
    }
  } else {
    res.status(409).send("Invalid Given Datas! ")
  }
}
export default { getAll, getCat }
