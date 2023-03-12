import React from "react"
import { Outlet, NavLink } from "react-router-dom"

export default function HostVansLayout(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
        <nav className="host-vans-detail">
            <NavLink 
                to="."
                end 
                className="home-link" 
                style={({isActive}) => isActive ? activeStyles : null}>
                Details
            </NavLink>
            <NavLink 
                to="pricing"
                end 
                className="home-link" 
                style={({isActive}) => isActive ? activeStyles : null}>
                Pricing
            </NavLink>
            <NavLink 
                to="photos"
                end 
                className="home-link" 
                style={({isActive}) => isActive ? activeStyles : null}>
                Photos
            </NavLink>
        </nav>

        <Outlet />
        </>
    )
}