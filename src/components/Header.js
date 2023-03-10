import React from "react"
import { Link } from "react-router-dom"

export default function Header(){
    return (
        <div className="header">
            <h1>#VANLIFE</h1>
            <nav>
                <Link to="/about" className="home-link">About</Link>
                <Link to="/vans" className="home-link">Vans</Link>
            </nav>
            
        </div>
        
    )
}