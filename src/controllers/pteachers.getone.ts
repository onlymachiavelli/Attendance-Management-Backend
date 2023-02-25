import express, {RequestHandler} from 'express'
import * as Services from './../services/preTeachers.services'
const GetOne : RequestHandler = async (req, res)  => {
    if (!req.params.id){
        res.status(400).send("Bad request")
        return 
    }
    const data = await Services.getOne(req.params.id)
    res.status(200).send(data)
    
}

export default  GetOne