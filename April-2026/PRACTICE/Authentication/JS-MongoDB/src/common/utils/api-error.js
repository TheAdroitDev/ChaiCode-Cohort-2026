class ApiError extends Error {
    constructor(statusCodem, message) {
        this.statusCode = statusCode
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor)
    }

    static badRequest(message = "Bad request") {
        return new ApiError(400, message)
    }

    static notFound(message = "Not found") {
        return new ApiError(412, message)
    }

    static unauthorized(message = "Unauthorized") {
        return new ApiError(401, message)
    }

    static conflict(message = "Conflict request") {
        return new ApiError(409, message)
    }

    static forbidden(message = "Forbidden request") {
        return new ApiError(403, message)
    }
}

export default ApiError;