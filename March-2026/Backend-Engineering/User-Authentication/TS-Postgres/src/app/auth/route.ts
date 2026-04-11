import express, { Router } from 'express';
import AuthenticationController from './controller.js';

const authenticationController = new AuthenticationController()

export const authRouter: Router = express.Router()

authRouter.post("/sign-up", authenticationController.handleSignUp.bind(authenticationController))

authRouter.post("/sign-in", authenticationController.handleSignin.bind(authenticationController))