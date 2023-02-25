import express from 'express'
import Save from '../controllers/pteachers.save'
import GetAll from '../controllers/pteachers.getAll'
import GetOne from '../controllers/pteachers.getone'

const PteacherRoute = express.Router()
PteacherRoute.get("/", GetAll)
PteacherRoute.get("/:id", GetOne)
PteacherRoute.post("/", Save)


export default PteacherRoute