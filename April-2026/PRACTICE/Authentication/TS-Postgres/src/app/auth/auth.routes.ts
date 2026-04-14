import express, { Router } from "express";
import AuthenticationController from "./auth.controller.js"

const authenticationController = new AuthenticationController()

export const authRouter: Router = express.Router()

authRouter.post("/sign-up", authenticationController.handleSignUp.bind(authenticationController)) 