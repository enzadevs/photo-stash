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
    queryText: '',
    currentPage: 0,
    perPageImages: 24,
    resultsArray: 0,
    updateQueryText: queryText => set(() => ({queryText: queryText})),
    updateCurrentPage: currentPage => set(() => ({currentPage: currentPage})),
    updatePerPageImages: perPageImages => set(() => ({perPageImages: perPageImages})),
    // updateResultsArray: async() => {
    //     const fetchedPhotos = await getPhotos()
    //     console.log(fetchedPhotos)
    //     set({resultsArray: fetchedPhotos})
    // }
    // updateResultsArray: async() => {
    //     // const response = await fetch(`https://api.pexels.com/v1/search?query=${queryText}?page=${currentPage}&per_page=${perPageImages}`,
    //     //     {
    //     //         headers: {
    //     //             Authorization: API_KEY,
    //     //         },
    //     //     }
    //     // )
    //     // const data = await response.json()
    //     // set({resultsArray: data.photos})
    // }
    updateResultsArray: () => set((state) => ({ resultsArray: state.resultsArray + 1 }))
}))