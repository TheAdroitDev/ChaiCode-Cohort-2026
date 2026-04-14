import express, { Router } from "express";
import AuthenticationController from "./auth.controller.js"
import { restrictToAuthenticatedUser } from "./middleware/auth.middleware.js";

const authenticationController = new AuthenticationController()

export const authRouter: Router = express.Router()

authRouter.post("/sign-up", authenticationController.handleSignUp.bind(authenticationController)) 
// signin route 
authRouter.post("/sign-in", authenticationController.handleSignIn.bind(authenticationController)) 

authRouter.get("/me", restrictToAuthenticatedUser(),authenticationController.handleMe.bind(authenticationController))