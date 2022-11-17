import express from "express"

const postRouter = express.Router()
import addPost from "./../controllers/posts/addPost"

postRouter.post("/", addPost)

export default postRouter
