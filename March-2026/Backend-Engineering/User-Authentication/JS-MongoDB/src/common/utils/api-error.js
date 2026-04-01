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

    static forbiddden(message = "Forbidden"){
        return new ApiError(412, message)
    }

    static notfound(message="notfound"){
        return new ApiError(404, message)
    }
}

export default ApiError
