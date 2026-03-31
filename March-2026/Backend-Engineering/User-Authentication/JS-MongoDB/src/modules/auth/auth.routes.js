import * as controller from "./auth.controller.js"
import { Router } from "express"
import validate from "../../common/middleware/validate.middleware.js"
import registerDto from "./dto/register.dto.js"

const router = Router();

router.post("/register", validate(registerDto), controller.register);

export default router