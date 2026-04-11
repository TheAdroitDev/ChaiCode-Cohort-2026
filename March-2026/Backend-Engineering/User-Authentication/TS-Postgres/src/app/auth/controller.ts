import type { Request, Response } from "express"
import { signInPayloadModel, signUpPayloadModel } from "./model.js"
import { usersTable } from "../../db/schema.js"
import { db } from "../../db/index.js"
import { eq } from "drizzle-orm"
import { createHmac, randomBytes } from "node:crypto"

class AuthenticationController {
    public async handleSignUp(req: Request, res: Response) {
        // handle the data
        const validationResult = await signUpPayloadModel.safeParseAsync(req.body)

        // validation
        if (validationResult.error) return res.status(400).json({
            message: "Body validation failed!",
            error: validationResult.error.issues
        }
        )

        // extract the data
        const { firstName, lastName, email, password } = validationResult.data

        // validation for existing user in DB
        const userEmailResult = await db.select().from(usersTable).where((eq(usersTable.email, email)))

        // prepare salt
        const salt = randomBytes(32).toString('hex')
        // hash password
        const hash = createHmac('sha256', salt).update(password).digest('hex')

        const [result] = await db.insert(usersTable).values({
            firstName,
            lastName,
            email,
            password: hash,
            salt
        }).returning({ id: usersTable.id })


        return res.status(201).json({
            message: "User created successfully"
        })
    }

    public async handleSignin(req: Request, res: Response) {
        // handle the data
        const validationResult = await signInPayloadModel.safeParseAsync(req.body)

        if (validationResult.error) return res.status(400).json({
            message: "Body validation failed!",
            error: validationResult.error.issues
        })
    }
}

export default AuthenticationController 