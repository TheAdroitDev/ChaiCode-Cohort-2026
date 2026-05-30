import {api} from "./api.js"
import { tokenStore } from "./tokenStore.js"

export const authService = {
    async register({name, email, password}){
        const {data} = await api.post("/auth/register",{name,email,password})
        tokenStore.set(data)
        return data;
    },

    async login({email,password}){
        const {data} = await api.post("/auth/login",{email,password})
        tokenStore.set(data)
        return data;
    },

    async logout(){
        await api.post("/auth/logout")
        tokenStore.clear()
    },
    
    async getProfile(){
        const {data} = await api.get("/auth/profile")
        return data.user
    }
}