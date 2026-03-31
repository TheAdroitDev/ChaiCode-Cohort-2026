class ApiError extends Error {
    constructor(statusCode, message) {
        super(message)
        this.statusCode = statusCode
        this.isOperational = true
        Error.captureStackTrace(this, this.constructor)
    }

    static badRequest(message = "Bad request"){
        return new ApiError(400,message)
    }

    static unauthorized(message = "Unauthorized"){
        return new ApiError(401,message)
    }

    static conflict(message = "Conflict"){
        return new ApiError(409,message)
    }

}

export default ApiError