import Posts from "./../../models/post"
import express, { RequestHandler } from "express"
import dateFormat from "date-and-time"
import * as postServ from "./../../services/postsServ"
import * as userServ from "./../../services/userServ"
import Users from "../../models/users"
const addPost: RequestHandler = async (req, res) => {
  if (
    req.body.title &&
    req.body.postedby &&
    req.body.description &&
    req.body.category
  ) {
    const user: any = await userServ.getOne(req.body.postedby)

    console.log({
      user,
    })

    //get the daats !
    const date: any = new Date()
    const post: any = new Posts()
    post.title = req.body.title
    post.postedby = user
    post.description = req.body.description
    post.category = req.body.category
    post.price = req.body.price ? req.body.price : 0
    post.postedat = dateFormat.format(date, "YYYY-MM-DD HH:mm:ss")
    post.sold = false

    console.log({ post })

    return postServ
      .addPost(post)
      .then((resp) => {
        return res.status(201).send("Done adding the post ! ")
      })
      .catch((e) => {
        console.log(e)
        return res.status(409).send(e)
      })
  } else {
    return res.status(409).send("Invalid given datas ! ")
  }
}

export default addPost
