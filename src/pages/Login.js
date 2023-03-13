import React, {useState} from "react"
import { loginUser } from "./api"
import { useNavigate, useLocation } from "react-router-dom"


export default function Login(){
    const [formData, setFormData] = useState({
        email: "", password: ""
    })
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    function handleChange(e){
        setFormData(prev => (
            {...prev, [e.target.name] : e.target.value}
        ))
    }
    const navigationPath = location.state?.fromPath || "/host"

    function handleSubmit(e){
        e.preventDefault()
        setStatus("submitting")
        loginUser(formData)
            .then(()=>{ 
                localStorage.setItem("loggedin", true)
                navigate(navigationPath, { replace: true })
            })
            .catch(err => {
                setError(err)
            })
            .finally(()=>{
                setStatus("idle")
            })
    }

    return (
        <form className="login-wrapper" onSubmit={handleSubmit}>
            <h2>Sign in to your account</h2>
            {location.state?.message && <h3 style={{color: "red"}}>{location.state.message}</h3>}
            {error && <h3 style={{color: "red"}}>{error.message}</h3>}
            <input 
                type="text" 
                placeholder="Enter Email Addresses" 
                name="email"
                value={formData.email}
                onChange={handleChange} 
            />
            <input 
                type="password" 
                placeholder="Enter Password" 
                name="password"
                value={formData.password}
                onChange={handleChange} 
            />
            <button disabled={status === "submitting"}>
                {status === "submitting"? "Logging in": "Log in"}
            </button>
        </form>
    )
}