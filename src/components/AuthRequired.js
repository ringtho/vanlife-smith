import React from "react"
import {Outlet, Navigate} from "react-router-dom"



export default function AuthRequired(){
    //token
    const res = {token: null}
    //if no token-redirect to login else direct to the previous page
    if(!res.token){
        return <Navigate to="/login" replace />
    }

    return <Outlet />

}