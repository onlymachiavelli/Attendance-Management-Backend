import Categories from "../models/categories"

const addCat = async (datas: any) => {
  await Categories.save(datas)
}
const getCat = async (_id: any) => {
  return await Categories.find({
    select: ["category", "icon", "addedat", "description"],
    where: {
      category: _id,
    },
  })
}

const getAll = async () => {
  return await Categories.find()
}

export { addCat, getCat, getAll }
