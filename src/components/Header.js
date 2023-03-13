import React from "react"
import { Link, NavLink, Navigate } from "react-router-dom"

export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function logOut(){
        localStorage.removeItem("loggedin")
        return <Navigate to="/" />
    }

    return (
        <div className="header">
            <h1><Link to="." className="vanlife-link">#VANLIFE</Link></h1>
            <nav>
                <NavLink 
                    to="host" 
                    className="home-link" 
                    style={({isActive}) => isActive ? activeStyles : null}>
                    Host
                </NavLink>
                <NavLink 
                    to="about" 
                    className="home-link" 
                    style={({isActive}) => isActive ? activeStyles : null}>
                    About
                </NavLink>
                <NavLink 
                    to="vans" 
                    className="home-link" 
                    style={({isActive}) => isActive ? activeStyles : null}>
                    Vans
                </NavLink>
                <NavLink 
                    to="login" 
                    className="home-link" 
                    style={({isActive}) => isActive ? activeStyles : null}>
                    Login
                </NavLink> 
                {localStorage.getItem("loggedin") && <button onClick={logOut}>X</button>}
            </nav>
            
        </div>
        
    )
}