import { Pteachers } from "../models/preTeachers.entity"


const getAll = async () =>{
    return await Pteachers.find()

}

const getOne = async (id:any) =>{

    return await Pteachers.findOne(id)

}


const create = async (data:any) =>{
    const newPteacher = Pteachers.create(data)
    return await newPteacher.save()
}

const update = async (id:any, data:any) =>{
    const Pteacher = await Pteachers.findOne(id)
    if(!Pteacher) throw new Error("Teacher is not found not found")
    Object.assign(Pteacher, data)
    return await Pteacher.save()
}

const remove = async (id:any) =>{
    const Pteacher = await Pteachers.findOne(id)
    if(!Pteacher) throw new Error("Teacher is not found not found")
    return await Pteacher.remove()

}
export {
    getAll,
    getOne,
    create,
    update,
    remove
    
} 