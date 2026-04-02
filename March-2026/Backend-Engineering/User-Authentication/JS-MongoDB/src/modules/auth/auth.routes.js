import * as controller from "./auth.controller.js"
import { Router } from "express"
import validate from "../../common/middleware/validate.middleware.js"
import registerDto from "./dto/register.dto.js"
import LoginDto from "./dto/login.dto.js"

const router = Router();

router.post("/register", validate(registerDto), controller.register);

router.post("/login", validate(LoginDto), controller.login);

router.get("/logout", authenticate(), controller.logout)

router.get("/me", authenticate(), controller.getMe);

router.get("/verify-email/:token", controller.verifyEmail); // seperate controller

export default router
