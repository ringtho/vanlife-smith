import React, {Suspense} from "react"
import { useLoaderData, Link, defer, Await } from "react-router-dom"
import { getHostVans } from "../api"

export function loader(){
    return defer({vans : getHostVans()})
}

export default function HostVans(){
    const vansPromise = useLoaderData()

    const renderVans = (vans) => {
        const vansEls = vans.map((van) => {
            return (
                <div className="host-vans" key={van.id}>
                    <Link to="" key={van.id} className="host-vans-link">
                    <div className="host-van-container">
                        <img className="host-van-img" 
                        src={van.imageUrl} alt={van.name} />
                        <div className="host-van-names">
                            <h3>{van.name}</h3>
                            <p>${van.price}/day</p>
                        </div>
                    </div>
                    </Link>
                </div>
            )
        })
        return (
            <>{vansEls}</>
        )
    }

    return (
        <>
        <h1>Your Listed Vans</h1>
        <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={vansPromise.vans}>
                {renderVans}
            </Await>
        </Suspense>
        </>
    )
}