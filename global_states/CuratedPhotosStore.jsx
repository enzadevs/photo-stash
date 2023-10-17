import { create } from 'zustand'
const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY

export const useCuratedPhotosStore = create ((set,get) => ({
    curatedPhotosArray: [],
    minCuratedPhotos: async() => {
        const response = await fetch(`https://api.pexels.com/v1/curated?page=7&per_page=24`,
            {
                cache: 'no-store',
                headers: {
                    Authorization: API_KEY,
                },
            },
            { next: { revalidate: 21600 } }
        )
        const data = await response.json()
        set({curatedPhotosArray: data.photos})
    },
    maxCuratedPhotosArray: async() => {
        const response = await fetch(`https://api.pexels.com/v1/curated?page=1&per_page=48`,
            {
                cache: 'no-store',
                headers: {
                    Authorization: API_KEY,
                },
            },
            { next: { revalidate: 21600 } }
        )
        const data = await response.json()
        set({curatedPhotosArray: data.photos})
    }
}))