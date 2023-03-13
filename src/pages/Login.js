import React from "react"
import { loginUser } from "./api"
import { useNavigate, useLocation, Form, useActionData, useNavigation } from "react-router-dom"


export async function action({request}){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const user = await loginUser({email, password})
        return user
    }catch (err){
        return {error : err.message}
    }
    
}

export default function Login(){
    const {state : status} = useNavigation()
    const navigate = useNavigate()
    const location = useLocation()
    const user = useActionData()  

    const navigationPath = location.state?.fromPath || "/host"

    if (user?.token){
        localStorage.setItem("loggedin", true)
        navigate(navigationPath, {replace: true})
    }

    return (
        <Form action="/login" className="login-wrapper" method="post" >
            <h2>Sign in to your account</h2>
            {location.state?.message && <h3 style={{color: "red"}}>{location.state.message}</h3>}
            {user?.error && <h3 style={{color: "red"}}>{user.error}</h3>}
            <input 
                type="text" 
                placeholder="Enter Email Addresses" 
                name="email"
            />
            <input 
                type="password" 
                placeholder="Enter Password" 
                name="password"
            />
            <button disabled={status === "submitting"}>
                {status === "submitting"? "Logging in": "Log in"}
            </button>
        </Form>
    )
}