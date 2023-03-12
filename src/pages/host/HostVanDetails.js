import React, { Suspense } from "react"
import { Outlet, NavLink } from "react-router-dom"
import { defer, Await, useLoaderData } from "react-router-dom"
import { getHostVans } from "../api"

export function loader({params}){
    return defer({ van : getHostVans(params.id)})
}

export default function HostVansLayout(){
    const vansPromise = useLoaderData()
    
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function renderVan(van){
        return (
            <div className="details-container">
                <div className="detail-wrapper">
                    <img className="detail-img" src={van.imageUrl} alt={van.name} />
                    <div className="host-van-names">
                        <span>{van.type}</span>
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
                <nav className="host-vans-detail">
                    <NavLink 
                        to="."
                        end 
                        className="home-link" 
                        style={({isActive}) => isActive ? activeStyles : null}>
                        Details
                    </NavLink>
                    <NavLink 
                        to="pricing"
                        end 
                        className="home-link" 
                        style={({isActive}) => isActive ? activeStyles : null}>
                        Pricing
                    </NavLink>
                    <NavLink 
                        to="photos"
                        end 
                        className="home-link" 
                        style={({isActive}) => isActive ? activeStyles : null}>
                        Photos
                    </NavLink>
                </nav>

                <Outlet context={van} />
            </div>
        )
    }


    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={vansPromise.van}>
                {renderVan}
            </Await>
        </Suspense>
    )
}