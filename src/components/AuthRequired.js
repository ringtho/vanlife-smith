import React from "react"
import {Outlet, Navigate, useLocation} from "react-router-dom"



export default function AuthRequired(){
    const token = localStorage.getItem("loggedin")
    const location = useLocation()

    if(!token){
        return <Navigate to="/login" 
            state={
                {
                    fromPath : location.pathname, 
                    message: "You must login to continue"
                }
            } 
            replace 
        />
    }

    return <Outlet />

}