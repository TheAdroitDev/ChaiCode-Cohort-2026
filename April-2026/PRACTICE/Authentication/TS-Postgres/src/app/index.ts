import cookieParser from "cookie-parser";
import type { Express } from "express";
import express from "express"
import ApiResponse from "../common/utils/api-response.js";
import { authRouter } from "./auth/auth.routes.js";

export function createApplication(): Express {
    const app = express()

    // middlewares
    app.use(express.json())
    app.use(cookieParser())

    // routes
    app.get("/", (req, res) => {
        return ApiResponse.ok(res, "Welcome to the continental");
    });
    app.use("/auth", authRouter)
    return app
}