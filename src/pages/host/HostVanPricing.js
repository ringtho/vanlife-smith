import React from "react"
import { useOutletContext } from "react-router-dom"


export default function HostVanPricing(){
    const van = useOutletContext()

    return (
        <h4>${van.price} /day</h4>
    )
}