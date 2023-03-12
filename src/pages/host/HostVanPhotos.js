import React from "react"
import { useOutletContext } from "react-router-dom"


export default function HostVanPhotos(){
    const van = useOutletContext()

    return (
        <div className="host-van-container">
            <img className="host-van-img" 
            src={van.imageUrl} alt={van.name} />
        </div>
    )
}