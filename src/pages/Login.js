import React from "react"


export default function Login(){
    return (
        <form className="login-wrapper">
            <h3>SIGN IN TO YOUR ACCOUNT</h3>
            <input type="text" placeholder="Enter Email Addresses" />
            <input type="password" placeholder="Enter Password" />
            <button>Log in</button>
        </form>
    )
}