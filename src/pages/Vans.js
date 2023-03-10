import React, {useState, useEffect} from "react"


export default function Vans(){

    const [vans , setVans] = useState([])

    useEffect(()=>{
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    },[])

    const vansEl = vans.map((van) => {
        return (
            <div className="van">
                <img src={van.imageUrl} alt={van.name} className="van-img"/>
                <h3>{van.name}</h3>
                <p>${van.price} /day</p>
                <span className="van-type">{van.type}</span>
            </div>
        )
    })

    return (
        <>
        <h1>Explore our Van options</h1>
        {vansEl}
        
        </>
    )
}