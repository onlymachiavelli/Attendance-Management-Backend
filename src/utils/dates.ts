const getDate = () => {
  const date = new Date()

  let day: any = date.getDate()
  day = Number(day) < 10 ? "0" + String(day) : String(day)
  let month: any = date.getMonth() + 1
  month = Number(month) < 9 ? "0" + String(month) : String(month)
  const year = String(date.getFullYear())

  console.log(date)
  return String(`${year}-${month}-${day}`)
}

export default getDate
