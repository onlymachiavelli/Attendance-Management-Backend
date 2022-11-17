import Posts from "../models/post"

const addPost = async (datas: any) => {
  await Posts.save(datas)
}

const getAll = async () => {
  return await Posts.find()
}

const getPost = async (_id: any) => {
  return Posts.find({
    where: {
      id: _id,
    },
  })
}

export { addPost, getPost, getAll }
