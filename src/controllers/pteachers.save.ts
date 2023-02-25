import express, {RequestHandler} from 'express'
import { Pteachers } from '../models/preTeachers.entity'
import * as Services from './../services/preTeachers.services'
const Save:RequestHandler = async (req, res) =>{
    if (!req.body.code && ! req.query.email) {
        res.status(400).send("Bad request")
        return
    }
    const datas  : any = req.body
    const Teacher = new Pteachers 
    //get the data 
    const target = await Services.getOne(datas.code)
    if (target) {
        res.status(400).send("Teacher already exist")
        return
    }

    Teacher.code = datas.code
    Teacher.email = datas.email
    try {
        Pteachers.save(Teacher)
        res.status(200).send("Teacher saved")
    } catch (error) {
        res.status(500).send("Internal server error")
        
    }
    

}   

export default Save