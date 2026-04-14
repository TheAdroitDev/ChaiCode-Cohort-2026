import type { Request, Response, NextFunction } from "express";
import ApiError from "../../../common/utils/api-error.js";
import { verifyAccessToken } from "../../../common/utils/jwt.utils.js";

export function authenticationMiddleware() {
    return function (req: Request, res: Response, next: NextFunction) {
        const header = req.headers['authorization']
        // validation
        if (!header) next()

        if (!header?.startsWith('Bearer')) {
            throw ApiError.unauthorized("Authorization header must start with Bearer")
        }

        const token = header.split(' ')[1]

        if (!token) throw ApiError.forbidden("authorization header must start with Bearer and followed by token")

        const user = verifyAccessToken(token)

        // @ts-ignore
        req.user = user

        next()
    }
}

export function restrictToAuthenticatedUser() {
    return function (req: Request, res: Response, next: NextFunction) {

        // @ts-ignore
        if (!req.user) throw ApiError.forbidden("Authentication Required")

        return next()
    }
}