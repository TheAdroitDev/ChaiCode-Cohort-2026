import * as authService from "./auth.service.js"
import ApiResponse from "../../common/utils/api-response.js"

const register = async (res, req) => {
    const user = await authService.register(req.body)

    return ApiResponse.created(res, "Registration sucessfully", user)
}

const login = async (req, res) => {
    const { user, accessToken, refreshToken } = await authService.login(req.body)

    // set cookies
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secured: true,
        maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
    })

    ApiResponse.ok(res, "Login successfull", { user, accessToken })
}

const logout = async (req, res) => {
    await authService.logout(req.user.id)
    res.clearCookie("refreshToken")

    ApiResponse.ok(res, "Logout successfull")
}

const getMe = async (req, res) => {
    const user = await authService.getMe(req.user.id)
    ApiResponse.ok(res, "User profile", user)
}
export { register, login, logout, getMe}
