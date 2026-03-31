import Joi from "joi";

class BaseDto {
    static schema = Joi.object({})

    static validate(data){
        const {error,value} = this.schema.validate(data,{
            abortEarly: false,
            stripUnknown: true
        })

        if(error){
            const errors = error.details.map((d)=>d.message)
            return {errors,value: null}
        }

        return {errors: null,value}
    }
}

export default BaseDto