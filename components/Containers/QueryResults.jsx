import { create } from 'zustand'
const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY

const getPhotos = async () => {
    const response = await fetch(`https://api.pexels.com/v1/search?query=supercar?page=0&per_page=5`,
        {
            headers: {
                Authorization: API_KEY,
            },
        }
    )
    const data = await response.json()
    return data.photos
}

export const useResultsStore = create((set)=>({
    resultsArray: [],
    updateResultsArray: async() => {
        const fetchedPhotos = await getPhotos()
        console.log(fetchedPhotos)
        set({resultsArray: fetchedPhotos})
    }
}))

// {
//     // await new Promise(resolve => setTimeout(resolve,2500))
//     console.log(true)
// }