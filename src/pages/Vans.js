import React, {useState, useEffect} from "react"
import { useSearchParams, Link } from "react-router-dom"


export default function Vans(){

    const [vans , setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")

    useEffect(()=>{
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
            })
    },[])

    const displayVans = typeFilter ? 
    vans.filter(van => van.type === typeFilter.toLocaleLowerCase()) :
    vans

    

    const vansEl = displayVans.map((van) => {
        return (
            <>
            
            
            <div className="van" key={van.id}>
                <img src={van.imageUrl} alt={van.name} className="van-img"/>
                <h3>{van.name}</h3>
                <p>${van.price} /day</p>
                <span className={`van-type ${van.type}`}>{van.type}</span>
            </div>
            </>
        )
    })

    return (
        <>
        <h1>Explore our Van options</h1>
        <div className="van-filter">
            <Link to="?type=simple" className="van-type simpleBtn">Simple</Link>
            <Link to="?type=luxury" className="van-type luxuryBtn">Luxury</Link>
            <Link to="?type=rugged" className="van-type ruggedBtn">Rugged</Link>
        </div>
        {vansEl}
        </>
    )
}