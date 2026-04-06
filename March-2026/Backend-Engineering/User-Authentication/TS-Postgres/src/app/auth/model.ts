import { optional, z } from "zod"

const signUpPayloadModel = z.object({
    firstName: z.string().min(2),
    lastName: z.string().nullable().optional(),
    email: z.email(),
    password: z.string().min(6)
})

export default signUpPayloadModel