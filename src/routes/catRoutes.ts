import express from "express"

const catRoutes = express.Router()

import addCat from "./../controllers/category/addCat"

catRoutes.post("/", addCat)
export default catRoutes
