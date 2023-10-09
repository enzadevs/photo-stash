import { create } from 'zustand'
const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY

export const useCuratedPhotosStore = create ((set,get) => ({
    curatedPhotosArray: [],
    minCuratedPhotos: async() => {
        const response = await fetch(`https://api.pexels.com/v1/curated?page=7&per_page=24`,
            {
                headers: {
                    Authorization: API_KEY,
                },
            }
        )
        const data = await response.json()
        set({curatedPhotosArray: data.photos})
    },
    maxCuratedPhotosArray: async() => {
        const response = await fetch(`https://api.pexels.com/v1/curated?page=10&per_page=85`,
            {
                headers: {
                    Authorization: API_KEY,
                },
            }
        )
        const data = await response.json()
        set({curatedPhotosArray: data.photos})
    }
}))