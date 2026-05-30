import axios from "axios"
import { tokenStore } from "./tokenStore.js"

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api"

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use((config) => {
    const token = tokenStore.getAccess()
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}) 

api.interceptors.response.use((response)=>{
    response,
    async (error) => {
        if(error.response?.status === 401){
            // task
        }
    }
})