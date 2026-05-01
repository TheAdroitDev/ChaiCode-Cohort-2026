import express from "express"
import cookieParser from "cookie-parser"
import ApiError from "./common/utils/api-error"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// app.use("/api/auth",authRoute)

// Catch-all for undefined routes
app.all("{*path}", (req, res) => {
    throw ApiError.notFound(`Route ${req.originalUrl} not found`)
})