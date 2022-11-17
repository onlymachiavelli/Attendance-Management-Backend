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
]

const getOne = async (target: any) => {
  return await Users.findOne({
    select: datas,
    where: {
      id: target,
    },
  })
}

const postUser = async (datas: any) => {
  await Users.save(datas)
}

export { getAll, getOne, postUser }
