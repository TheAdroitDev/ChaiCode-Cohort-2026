import express from "express"
import type { Express } from "express";
import { authRouter } from "./auth/route.js";

export function createApplication(): Express {
    const app = express()

    // middlewares
    app.use(express.json())

    // routes
    app.get('/', (req,res) => {
        return res.json({message: "Welcome to the Continental"})
    })

    app.use("/auth", authRouter)
    return app
}