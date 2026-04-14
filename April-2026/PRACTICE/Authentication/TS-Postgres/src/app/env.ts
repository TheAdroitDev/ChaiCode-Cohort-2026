import { z } from "zod"
import { configDotenv } from "dotenv";
import "dotenv/config";
import ApiError from "../common/utils/api-error.js";

const envSchema = z.object({
    PORT: z.coerce.number(),

    JWT_ACCESS_SECRET: z.string(),
    JWT_ACCESS_EXPIRY: z.string().default("15m"),

    JWT_REFRESH_SECRET: z.string(),
    JWT_REFRESH_EXPIRY: z.string().default("7d"),

    DATABASE_URL: z.string(),

    SMTP_USER: z.string(),
    SMTP_PASS: z.string(),
    SMTP_FROM_EMAIL: z.email()
})

function createEnv(env: NodeJS.ProcessEnv) {
    const safeParseResult = envSchema.safeParse(env);
    if (!safeParseResult.success) throw ApiError.badRequest(safeParseResult.error.message)
    return safeParseResult.data
}

export const env = createEnv(process.env)