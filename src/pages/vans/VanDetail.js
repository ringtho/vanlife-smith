import { Link, useLocation, useLoaderData } from "react-router-dom" 
import { getVans } from "../api"

export function loader({params}){
    return getVans(params.id)
}


export default function VanDetail(){
    const van = useLoaderData()
    const location = useLocation()

    const backPath = location.state?.filter  || ""
    const vanType = location.state?.type || "All"

    return(
        <div className="van-detail-wrapper">
            <Link to={`..${backPath}`} relative="path"
            >&larr; Back to {vanType} Vans</Link>

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