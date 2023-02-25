import express, {RequestHandler} from 'express'
import * as Services from './../services/preTeachers.services'
const GetAll : RequestHandler = async (req, res)  => {
    const data = await Services.getAll()
    res.status(200).send(data)
}

export default  GetAll