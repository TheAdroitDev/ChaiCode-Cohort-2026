import crypto from "crypto"

const generateResetToken = () => {
    const rawToken = crypto.randomBytes(32).toString("hex")

    const hashedToken = crypto.createHash("sha256").update(rawToken).digest("hex")

    return { rawToken, hashedToken }
}

export {
    generateResetToken
}