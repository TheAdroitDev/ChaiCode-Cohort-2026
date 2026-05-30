const ACCESS_TOKEN = "accessToken"
const REFRESH_TOKEN = "refreshToken"
const USER_KEY = "user"

export const tokenStore = {
    getAccess: () => (localStorage.getItem(ACCESS_TOKEN)),
    getRefresh: () => (localStorage.getItem(REFRESH_TOKEN)),
    getUser: () => {
        const raw = localStorage.getItem(USER_KEY)
        return raw ? JSON.parse(raw) : null
    },

    set: ({ accessToken, refreshToken, user }) => {
        if (accessToken) localStorage.setItem(ACCESS_TOKEN, accessToken)
        if (refreshToken) localStorage.setItem(REFRESH_TOKEN, refreshToken)
        if (user) localStorage.setItem(USER_KEY, JSON.stringify(user))
    },

    clear: () => {
        localStorage.removeItem(ACCESS_TOKEN)
        localStorage.removeItem(REFRESH_TOKEN)
        localStorage.removeItem(USER_KEY)
    }
}