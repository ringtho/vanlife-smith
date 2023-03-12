import { Suspense } from "react"
import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom" 
import { getVans } from "../api"

export function loader({params}){
    return defer({van : getVans(params.id)})
}

export default function VanDetail(){
    const vanPromise = useLoaderData()
    const location = useLocation()
    const backPath = location.state?.filter  || ""
    const vanType = location.state?.type || "All"

    const renderVanData = (van) => {
        return (
            <>
            <img src={van.imageUrl} alt={van.name} className="van-detail-img" />
            <span className={`van-type ${van.type}`}>{van.type}</span>
            <h1 className="van-name">{van.name}</h1>
            <h2>${van.price} /day</h2>
            <p>{van.description}</p>
            <button className="rentBtn">RENT THIS VAN</button>
            </>
        )
    }

    return(
        <div className="van-detail-wrapper">
            <Link to={`..${backPath}`} relative="path"
            >&larr; Back to {vanType} Vans</Link>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={vanPromise.van}>
                    {renderVanData}
                </Await>
            </Suspense>
        </div>
        
    )
}