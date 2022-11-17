import Users from "../models/users"
import userRepo from "../utils/dataRepo"
const selectedDatas: any = [
  "username",
  "fullname",
  "birthdate",
  "gender",
  "isverified",
  "createdat",
  "updatedat",
  "gender",
  "email",
  "phone",
]
const getMe = async (_id: any) => {
  return await Users.find({
    select: selectedDatas,
    where: {
      username: _id,
    },
  })
}

const postMe = async (datas: any) => {
  await Users.save(datas)
}

const deleteMe = async (_target: any) => {
  //await Users.delete(_target)
  userRepo
    .createQueryBuilder()
    .delete()
    .from(Users)
    .where({ username: _target })
    .execute()
}

const getByPhone = async (_phone: any) => {
  return await Users.find({
    select: selectedDatas,
    where: {
      phone: _phone,
    },
  })
}

const getByEmail = async (_email: any) => {
  return await Users.find({
    select: selectedDatas,
    where: {
      email: _email,
    },
  })
}

const getPass = async (_target: any) => {
  return await Users.find({
    select: ["password"],
    where: {
      username: _target,
    },
  })
}

export const getOne = async (_id: any) => {
  return await Users.findOne({
    select: selectedDatas,
    where: {
      username: _id,
    },
  })
}
export { getMe, postMe, getByPhone, getByEmail, deleteMe, getPass }
