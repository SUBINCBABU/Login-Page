import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import userRouter from "./router.js"
import dotenv from "dotenv"
import { db } from "./db/connection.js"
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
dotenv.config()
app.use(cors())
app.use("/", userRouter)
db()
app.listen(2002)