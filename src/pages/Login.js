import React, {useState} from "react"


export default function Login(){

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    function handleChange(e){
        setFormData(prev => (
            {...prev, [e.target.name] : e.target.value}
        ))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form className="login-wrapper" onSubmit={handleSubmit}>
            <h3>Sign in to your account</h3>
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
            <button>Log in</button>
        </form>
    )
}