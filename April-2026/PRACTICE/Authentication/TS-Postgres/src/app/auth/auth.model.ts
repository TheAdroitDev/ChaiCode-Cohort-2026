import z from "zod";

export const signUpModel = z.object({
    firstName: z.string().min(2).nonempty(),
    lastName: z.string().optional(),
    email: z.email(), // regex: /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i
    password: z.string()
})