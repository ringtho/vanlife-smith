import React from "react"
import { NavLink } from "react-router-dom"


export default function HostHeader(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <nav>
            <NavLink 
                to="." 
                className="home-link" 
                style={({isActive}) => isActive ? activeStyles : null}>
                Dashboard
            </NavLink>
            <NavLink 
                to="income" 
                className="home-link" 
                style={({isActive}) => isActive ? activeStyles : null}>
                Income
            </NavLink>
            <NavLink 
                to="vans" 
                className="home-link" 
                style={({isActive}) => isActive ? activeStyles : null}>
                Vans
            </NavLink>
            <NavLink 
                to="reviews" 
                className="home-link" 
                style={({isActive}) => isActive ? activeStyles : null}>
                Reviews
            </NavLink>
        </nav>

    )
}