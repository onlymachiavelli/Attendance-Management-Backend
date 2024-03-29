import express from "express"
import "dotenv/config"
import { json } from "body-parser"
import appDataSource from "./utils/POSTGRES"
const cors = require("cors")
const app = express()

import PteacherRoute from "./routes/pteacher.route"


app.use(json())
app.use(cors())

const PORT: any = process.env.PORT || 3000

app
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`)

    appDataSource
      .initialize()
      .then((res: any) => {
        console.log("Connected to the database ! ")
        app.use("/p",PteacherRoute )
        //app use
      })
      .catch((e: any) => {
        console.log(e)
      })
  })
  .on("error", () => {
    console.log("There's an error ! ")
  })
