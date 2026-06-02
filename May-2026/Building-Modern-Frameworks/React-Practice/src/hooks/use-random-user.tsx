import * as React from "react"

export interface FreeAPIGetRandomUserResponse {
  data: {
    cell: string
    dob: {
      age: number
      date: string
    }
    email: string
    gender: string
    id: number
    location: {
      city: string
      coordinates: {
        latitude: string
        longitude: string
      }
      country: string
      postcode: number
      state: string
      street: {
        name: string
        number: number
      }
      timezone: {
        description: string
        offset: string
      }
    }
    login: {
      md5: string
      password: string
      salt: string
      sha1: string
      sha256: string
      username: string
      uuid: string
    }
    name: {
      first: string
      last: string
      title: string
    }
    nat: string
    phone: string
    picture: {
      large: string
      medium: string
      thumbnail: string
    }
    registered: {
      age: number
      date: string
    }
  }
  message: string
  statusCode: number
  success: boolean
}

export function useRandomUser(){
    const [user, setUser] = React.useState<null | FreeAPIGetRandomUserResponse["data"]>()

    async function fetchRandomUser () {
       const rawResponse = await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
       })

       const response = await rawResponse.json() as FreeAPIGetRandomUserResponse 
       if(response.data && response.success){
        setUser(response.data)
       } 
    }

    return {
        user,
        fetchRandomUser
    }
}