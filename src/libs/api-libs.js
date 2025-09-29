export const getAnimeResponse = async(resource, query) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.jikan.moe/v4"
    const response = await fetch(`${baseUrl}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getNestedAnimeResponse = async(resource, objectProperty, query = "") => {
    const response = await getAnimeResponse(resource, query)
    
    // Tambahkan error handling untuk memastikan response.data ada
    if (!response || !response.data) {
        console.error("Response atau response.data tidak ditemukan:", response)
        return []
    }
    
    return response.data.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data.slice(first, last),
    }

    return response
}