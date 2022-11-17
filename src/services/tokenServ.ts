import BLT from "../models/blackListedTokens"
import * as dateFormat from "date-and-time"
const killToken = async (token: any) => {
  const deadToken = new BLT()
  deadToken.token = token
  const currentDate = new Date()
  const date: any = dateFormat.format(currentDate, "YYYY-MM-DD HH:mm:ss")
  deadToken.addedat = date
  await BLT.save(deadToken)
}

const getToken = async (_token: any) => {
  const data: any = await BLT.find({
    where: {
      token: _token,
    },
  })
  console.log(data)
  return data.length === 0
}
export { killToken, getToken }
