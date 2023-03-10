import { useEffect, useState } from "react"
import React from "react-router-dom"
import { Link, useParams, useLocation } from "react-router-dom" 


export default function VanDetail(){
    const [van, setVan] = useState(null)
    const param  = useParams()
    const location = useLocation()
    console.log(location)
    
    useEffect(() => {
        fetch(`/api/vans/${param.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [param])

    const backPath = location.state?.filter  || ""
    const vanType = location.state?.type || "All"

    console.log(location.state)
    return(
            <div className="van-detail-wrapper">
                <Link to={`..${backPath}`} relative="path">&larr; Back to {vanType} Vans</Link>

                { van ?(
                <>
                    <img src={van.imageUrl} alt={van.name} className="van-detail-img" />
                    <span className={`van-type ${van.type}`}>{van.type}</span>
                    <h1 className="van-name">{van.name}</h1>
                    <h2>${van.price} /day</h2>
                    <p>{van.description}</p>
                    <button className="rentBtn">RENT THIS VAN</button>
                </>) : <h2>Loading..</h2> }
            </div>
        
    )
}