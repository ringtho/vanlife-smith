import React from "react"
import { useOutletContext } from "react-router-dom"


export default function HostVanDetails(){
    const van = useOutletContext()    

    return (
        <>
        <p><span className="bold">Name: </span>{van.name}</p>
        <p><span className="bold">Category: </span>{van.type}</p>
        <p><span className="bold">Description: </span>{van.description}</p>
        <p><span className="bold">Visibility: </span>Public</p>
        </> 
    )
}