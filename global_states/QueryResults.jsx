import { create } from 'zustand'
const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY

export const useResultsStore = create((set,get)=>({
    queryText: '',
    resultsArray: [],
    updateQueryText: queryText => set(() => ({queryText: queryText})),
    clearInputArea: () => set(() => ({queryText: ''})),
    updateResultsArray: async() => {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${(get().queryText) + ` `}?page=1&per_page=48`,
            {
                headers: {
                    Authorization: API_KEY,
                },
            }
        )
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        set({resultsArray: data.photos})
    }
}))