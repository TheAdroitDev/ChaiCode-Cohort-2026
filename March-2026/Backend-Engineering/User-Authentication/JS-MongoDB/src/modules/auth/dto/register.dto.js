import Joi from "joi";
import BaseDto from "../../../common/dto/base.dto";

class RegisterDto extends BaseDto {
    static schema = Joi.object({
        name: Joi.string().trim().min(2).max(40).required(),
        email: Joi.string().trim().email().lowercase().required(),
        password: Joi.string().message("Password must contain minimun 8 characters").min(8).required(),
        role: Joi.string().valid("customer","seller").default("customer")
    })
}

export default RegisterDto;