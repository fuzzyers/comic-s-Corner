import axios from "axios"

export const LoginAuth = async (email: string, password:string) => {
    try {
        await axios.post(`${process.env.NEXT_PUBLIC_WEB_URL}/api/authentication/login`, {
            email: email,
            password: password
        })

        console.log("Logged in")
    } catch (error) {
        console.log(error)
    }
}

export const RegisterAuth = async (email: string, password:string, confirmPassword:string, username:string) => {
    try {
        await axios.post(`${process.env.NEXT_PUBLIC_WEB_URL}/api/authentication/register`, {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            username: username
        })

        console.log("registered")
    } catch (error) {
        console.log(error)
    }
}