import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <div className="header">
            <h1><Link to="." className="vanlife-link">#VANLIFE</Link></h1>
            <nav>
                <NavLink 
                    to="/host" 
                    className="home-link" 
                    style={({isActive}) => isActive ? activeStyles : null}>
                    Host
                </NavLink>
                <NavLink 
                    to="/about" 
                    className="home-link" 
                    style={({isActive}) => isActive ? activeStyles : null}>
                    About
                </NavLink>
                <NavLink 
                    to="/vans" 
                    className="home-link" 
                    style={({isActive}) => isActive ? activeStyles : null}>
                    Vans
                </NavLink>
            </nav>
            
        </div>
        
    )
}