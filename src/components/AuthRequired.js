import React from "react"
import {Outlet, Navigate} from "react-router-dom"



export default function AuthRequired(){
    const res = {token: 'Smith'}
    if(!res.token){
        return <Navigate to="/login" replace />
    }

    return <Outlet />

}