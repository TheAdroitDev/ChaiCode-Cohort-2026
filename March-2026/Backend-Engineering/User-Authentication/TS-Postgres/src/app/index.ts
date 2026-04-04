import express from "express"
import type { Express } from "express";

export function createApplication(): Express {
    const app = express()

    // middlewares


    // routes
    app.get('/', (req,res) => {
        return res.json({message: "Welcome to the Continental"})
    })
    return app
}