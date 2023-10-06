import { create } from 'zustand'
const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY

export const useResultsStore = create((set,get)=>({
    queryText: '',
    currentPage: 0,
    perPageImages: 24,
    resultsArray: [],
    updateQueryText: queryText => set(() => ({queryText: queryText})),
    updateCurrentPage: currentPage => set(() => ({currentPage: currentPage})),
    updatePerPageImages: perPageImages => set(() => ({perPageImages: perPageImages})),
    updateResultsArray: async() => {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${(get().queryText)}?page=${(get().currentPage)}&per_page=${(get().perPageImages)}`,
            {
                headers: {
                    Authorization: API_KEY,
                },
            }
        )
        const data = await response.json()
        set({resultsArray: data.photos})
        console.log((get().queryText))
    }
}))