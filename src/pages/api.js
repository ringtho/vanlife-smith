


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

export async function getHostVans(){
    const res = await fetch('/api/host/vans')
    const data = await res.json()
    return data.vans
}
