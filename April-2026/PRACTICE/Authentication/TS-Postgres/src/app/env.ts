import { z } from "zod"

const envSchema = z.object({
    PORT: z.coerce.number(),

    JWT_ACCESS_SECRET: z.string().default("15m"),
    JWT_ACCESS_EXPIRY: z.string(),

    JWT_REFRESH_SECRET: z.string(),
    JWT_REFRESH_EXPIRY: z.string().default("7d"),

    DATABASE_URL: z.string()
})

function createEnv(env: NodeJS.ProcessEnv) {
    const safeParseResult = envSchema.safeParse(env);
    if (!safeParseResult.success) throw new Error(safeParseResult.error.message)
    return safeParseResult.data
}

export const env = createEnv(process.env)