import Joi from "joi";
import BaseDto from "../../../common/dto/base.dto";

class LoginDto extends BaseDto {
    static schema = Joi.object({
        email: Joi.string().trim().email().required().lowercase(),
        password: Joi.string().trim().message("Password must contain minimun 8 characters").min(8).required()
    })
}

export default LoginDto;