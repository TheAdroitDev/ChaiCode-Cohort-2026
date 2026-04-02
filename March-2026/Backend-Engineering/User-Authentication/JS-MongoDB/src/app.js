import express from "express"
import cookieParser from "cookie-parser"
import authRoute from "../src/modules/auth/auth.routes.js"

const app = express()
app.use(express.json()) // accept json

app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use("/api/auth", authRoute);

export default app;
