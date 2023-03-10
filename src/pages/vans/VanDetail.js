import { useEffect, useState } from "react"
import React from "react-router-dom"
import { Link, useParams } from "react-router-dom" 


export default function VanDetail(){
    const [van, setVan] = useState({})
    const param  = useParams()
    
    useEffect(() => {
        fetch(`/api/vans/${param.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [param])

    console.log(van)
    return(
            <div className="van-detail-wrapper">
                <Link to="..">&larr; Back to All Vans</Link>
                <img src={van.imageUrl} alt={van.name} className="van-detail-img" />
                <span className={`van-type ${van.type}`}>{van.type}</span>
                <h1 className="van-name">{van.name}</h1>
                <h2>${van.price} /day</h2>
                <p>{van.description}</p>
                <button className="rentBtn">RENT THIS VAN</button>
            </div>
        
    )
}