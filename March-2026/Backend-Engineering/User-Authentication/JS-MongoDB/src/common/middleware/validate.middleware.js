import ApiError from "../utils/api-error"

const validate = (Dtoclass) => {
    return (req, res, next) => {
        const { errors, value } = Dtoclass.validate(req.body)
        if (errors) {
            throw ApiError.badRequest(errors.join("; "))
        }
        // pass on only sanitized data
        req.body = value
        next()
    }
}

export default validate