import ApiError from "../../common/utils/api-error.js"
import User from "./auth.model.js"
import { generateAccessToken, generateRefreshToken, generateResetToken, verifyRefreshToken } from "../../common/utils/jwt.utils.js"
import { sendVerificationEmail } from "../../common/config/email.js"

// hash token utility
const hashToken = (token) => {
    return crypto.createHash("sha256").update(token).digest("hex")
}

const register = async ({ name, email, password, role }) => {
    // check if user already exists
    const existing = await User.findOne({ email })

    if (existing) {
        throw ApiError.conflict("Email already exists")
    };

    const { token, hashedToken } = generateResetToken();

    const user = await User.create({
        name,
        email,
        password, // hash later in model
        role,
        verificationToken: hashedToken
    });

    // TODO: send an email to user with token: rawToken
    try {
        await sendVerificationEmail(email, token)
    } catch (error) {
        console.log("Registration email failed", error);
        throw ApiError.badRequest("Email failed")
    }

    const userObj = user.toObject();
    delete userObj.password
    delete userObj.verificationToken

    return userObj
}

const login = async ({ email, password }) => {

    const user = await User.findOne({ email }).select("+password")

    if (!user) throw ApiError.unauthorized("Invalid email and password")

    if (!user.isVerified) {
        throw ApiError.forbiddden("User is not verified ")
    }

    // light weight
    const accessToken = generateAccessToken({ id: user._id, role: user.role })
    const refreshToken = generateRefreshToken({ id: user._id })


    user.refreshToken = hashToken(refreshToken)

    await user.save({ validateBeforeSave: false })

    const userObj = user.toObject();

    // clean response
    delete userObj.password
    delete userObj.refreshToken

    return { user: userObj, accessToken, refreshToken } // note: send only refreshToken not hashed as we will perfrom hashing later in refreshToken
}

const refreshAccessToken = async (token) => {
    if (!token) throw Api.unauthorized("Refresh token missing")

    // verify token identity
    const decoded = verifyRefreshToken(token)

    const user = await User.findById(decoded.id).select("+refreshToken")
    if (!user) {
        throw ApiError.unauthorized("Invalid user")
    }

    if (user.refreshToken !== hashToken(token)) {
        throw ApiError.unauthorized("Invalid refresh token")
    }

    const accessToken = generateAccessToken({ id: user._id, role: user.role })

    // return accessToken
    return { accessToken }
}

const rotateRefreshToken = async (token) => {
    if (!token) throw ApiError.unauthorized("Refresh token missing")

    const decoded = verifyRefreshToken(token)
    const user = await User.findById(decoded.id).select("+refreshToken")

    if (!user) {
        throw ApiError.unauthorized("Invalid user")
    }

    if (user.refreshToken !== hashToken(token)) {
        throw ApiError.unauthorized("Invalid refresh token")
    }

    // again generate new tokens
    // light weight
    const accessToken = generateAccessToken({ id: user._id, role: user.role })
    const refreshToken = generateRefreshToken({ id: user._id })

    user.refreshToken = hashToken(refreshToken)

    await user.save({ validateBeforeSave: false })

    const userObj = user.toObject();

    //  or => const { password, refreshToken: rt, ...userObj } = user.toObject()
    // clean response
    delete userObj.password
    delete userObj.refreshToken

    return { user: userObj, accessToken, refreshToken }
}

const logout = async (userId) => {

    /*     const user = await User.findById(userId);
        if (!user) throw ApiError.unauthorized("User not found");
    
        user.refreshToken = undefined;
        await user.save({ validateBeforeSave: false }); */

    // Or

    await User.findByIdAndUpdate(userId, { refreshToken: null })
}

const forgotPassword = async (email) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw ApiError.notfound("No account with that email exists")
    }

    const { rawToken, hashedToken } = generateResetToken()

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;

    await user.save()
}

const verifyEmail = async (token) => {
    const hashedToken = hashToken(token);

    const user = await User.findOne({ verificationToken: hashedToken }).select("+verificationToken")
    // validation
    if (!user) {
        throw ApiError.unauthorized("User not registered")
    }

    user.isVerified = true;
    user.verificationToken = undefined
    await user.save() // optional validationBeforeSave

    return user;
}

const getMe = async (userId) => {
    const user = await User.findById(userId)

    // validation
    if (!user) {
        throw ApiError.notfound("User not found")
    }

    // return user
    return user;
}
export { register, login, refreshAccessToken, rotateRefreshToken, logout, forgotPassword, verifyEmail, getMe};
