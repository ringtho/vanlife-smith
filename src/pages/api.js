


export async function getVans(id){
    const url = id ? `/api/vans/${id}` : '/api/vans'
    const res = await fetch(url)
    const errorMessage = {
        message: "Failed to fetch vans",
        statusText: res.statusText,
        status: res.status
    }
    if (!res.ok) {
        throw errorMessage
    }
    const data = await res.json()
    return data.vans 
}

export async function getHostVans(id){
    const url = id ? `/api/host/vans/${id}` : '/api/host/vans'
    const res = await fetch(url)
    const errorMessage = {
        message: "Failed to fetch host vans",
        statusText: res.statusText,
        status: res.status
    }
    
    if(!res.ok){
        throw errorMessage
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    const errorMessage = {
            message: data.message,
            statusText: res.statusText,
            status: res.status
    }

   

    if (!res.ok) {
        throw errorMessage
    }

    return data
}
