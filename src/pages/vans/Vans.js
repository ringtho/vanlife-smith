import React, {useState, useEffect} from "react"
import { useSearchParams, useLocation, Link } from "react-router-dom"
import { getVans } from "../api"


export default function Vans(){

    const [vans , setVans] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()

    const typeFilter = searchParams.get("type")


    useEffect(()=>{
        async function loadData(){
            setLoading(true)
            try{
                const vansArr = await getVans()
                setVans(vansArr)
            } catch(err){
                setError(err)
            } finally{
                setLoading(false)
            }
            
        }
        loadData()
    },[])

    const displayVans = typeFilter 
    ? vans.filter(van => van.type === typeFilter.toLocaleLowerCase()) 
    : vans

    const vansEl = displayVans.map((van) => {
        return (
            <Link 
                to={van.id} 
                key={van.id} 
                className="van-link"
                state={{type: typeFilter, filter: location.search}}
            >
                <div className="van" key={van.id}>
                    <img src={van.imageUrl} alt={van.name} className="van-img"/>
                    <h3>{van.name}</h3>
                    <p>${van.price} /day</p>
                    <span className={`van-type ${van.type}`}>{van.type}</span>
                </div>
            </Link>
        )
    })

    function createSearchParamString(key, value){
        const sp = new URLSearchParams(searchParams)
        if (value === null){
            sp.delete(key)
        }else{
            sp.set(key, value)
        }

        return `?${sp.toString()}`
    }

    if(loading){
        return <h2>Loading.....</h2>
    }

    if(error){
        return <h2>Error : {error.message}</h2>
    }

    return (
        <>
        <h1>Explore our Van options</h1>
        <div className="van-filter">
            <Link 
                to={createSearchParamString("type", "simple")} 
                className={`van-type simpleBtn 
                ${typeFilter === "simple"? "selected": ""}`}
            >Simple</Link>
            <Link 
                to={createSearchParamString("type", "luxury")} 
                className={`van-type luxuryBtn 
                ${typeFilter === "luxury"? "selected": ""}`}
            >Luxury</Link>
            <Link 
                to="?type=rugged" 
                className={`van-type ruggedBtn 
                ${typeFilter === "rugged"? "selected": ""}`}
            >Rugged</Link>
            {typeFilter && <Link to="." className="van-type">Clear Filter</Link>}
        </div>
        {vansEl}
        </>
    )
}