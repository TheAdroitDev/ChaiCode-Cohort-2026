import { optional, z } from "zod"

export const signUpPayloadModel = z.object({
    firstName: z.string().min(2),
    lastName: z.string().nullable().optional(),
    email: z.email(),
    password: z.string().min(6)
})

export const signInPayloadModel = z.object({
    email: z.email(),
    password: z.string()
})
