import type { Request, Response } from "express";
import { signInModel, signUpModel } from "./auth.model.js";
import { db } from "../../db/index.js";
import { userTable } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import ApiError from "../../common/utils/api-error.js";
import { createHmac, randomBytes } from "node:crypto";
import ApiResponse from "../../common/utils/api-response.js";
import { generateAccessToken } from "../../common/utils/jwt.utils.js";


class AuthenticationController {
    public async handleSignUp(req: Request, res: Response) {
        // handle the data (DTO)
        const validationResult = await signUpModel.safeDecodeAsync(req.body)

        // validation
        if (validationResult.error) {
            return res.json(400).json({
                message: "Body validation failed!",
                error: validationResult.error.issues
            })
        }

        // extract the data
        const { firstName, lastName, email, password } = validationResult.data

        // validate if user already exists

        const userEmailResult = await db.select().from(userTable).where(eq(userTable.email, email))

        // validation
        if (userEmailResult) {
            throw ApiError.conflict("User already exists")
        }

        // prepare salt
        const salt = randomBytes(32).toString('hex')

        // hash the password
        const hash = createHmac('sha256', salt).update(password).digest('hex')

        const [result] = await db.insert(userTable).values({
            firstName,
            lastName,
            email,
            password: hash,
            salt
        }).returning({ id: userTable.id })

        return ApiResponse.created(res, "User created successfully", result)
    }

    public async handleSignIn(req: Request, res: Response) {
        // handle the data (DTO)
        const validationResult = await signInModel.safeDecodeAsync(req.body)

        // validation
        if (validationResult.error) {
            return res.json(400).json({
                message: "Body validation failed!",
                error: validationResult.error.issues
            })
        }

        // extract the data
        const { email, password } = validationResult.data


        // validate user's email
        const [userSelect] = await db.select().from(userTable).where(eq(userTable.email, email))

        // validation
        if (!userSelect) {
            throw ApiError.notFound(`User with this email ${email} does not exists`)
        }

        // validate user's given password
        const salt = userSelect?.salt!
        // hash the password by matching the user salt from db
        const hash = createHmac('sha256', salt).update(password).digest('hex')

        if (userSelect?.password !== hash) throw ApiError.badRequest("Email or password is incorrect")

        // token
        const token = generateAccessToken({ userId: userSelect.id })
        
        return ApiResponse.signedIn(res, "Sign-in success", { token})
    }
}

export default AuthenticationController