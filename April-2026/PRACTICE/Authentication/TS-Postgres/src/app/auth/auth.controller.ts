import type { Request, Response } from "express";
import { signUpModel } from "./auth.model.js";
import { db } from "../../db/index.js";
import { userTable } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import ApiError from "../../common/utils/api-error.js";
import { createHmac, randomBytes } from "node:crypto";
import ApiResponse from "../../common/utils/api-response.js";


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
            ApiError.conflict("User already exists")
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

        ApiResponse.created(res, "User created successfully", result)
    }
}

export default AuthenticationController