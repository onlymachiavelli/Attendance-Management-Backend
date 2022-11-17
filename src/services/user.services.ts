import { Users } from "../models/user.entity"

const getAll = async () => {
  return await Users.find()
}

const datas: any = [
  "id",
  "username",
  "fullname",
  "email",
  "updatedat",
  "createdat",
  "phone",
]

const getOne = async (target: any) => {
  return await Users.findOne({
    select: datas,
    where: {
      id: target,
    },
  })
}

const getByuser = async (target: any) => {
  return await Users.findOne({
    select: datas,
    where: {
      username: target,
    },
  })
}

const getByEmail = async (target: any) => {
  return await Users.findOne({
    select: datas,
    where: {
      email: target,
    },
  })
}

const getByPhone = async (target: any) => {
  return await Users.findOne({
    select: datas,
    where: {
      phone: target,
    },
  })
}
const postUser = async (datas: any) => {
  await Users.save(datas)
}

export { getAll, getOne, postUser, getByuser, getByEmail, getByPhone }
