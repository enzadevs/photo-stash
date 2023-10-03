'use client'

import { createClient } from 'pexels'
const client = createClient('DvgO6rCGv7xwho7Jbm2fKH7iCnS91mpoVVTHub7DJl831NJZ1YIKkZlo')
import { createContext,useState,useRef,useEffect } from 'react'

export const ResultsContext = createContext()
export const InputTextValue = createContext()

export default function SearchResultsProvider({children}){
    const inputTextRef = useRef('')
    const [ resultsArray,setResultsArray ] = useState([])
    const [ currentPage,setCurrentPage ] = useState(1)
    const [ perPageImages,setPerPageImages ] = useState(5)

    // const handleFetchPhotos = async() =>{
    //     const inputTextValue = inputTextRef.current.value
    //     const results = await client.photos.search({ query: inputTextValue, page: currentPage ,per_page: perPageImages })
    //     setResultsArray(results)
    // }

    const loadMorePhotos = async() =>{
        setPerPageImages(currentPhotos => currentPhotos + 5)
    }

    useEffect(() => {
        const getSearchQueryPhotos = async () => {
        const inputTextValue = inputTextRef.current.value
        const results = await client.photos.search({ query: inputTextValue, page: currentPage ,per_page: perPageImages })
        setResultsArray(results)
    }},[])

    return (
        <ResultsContext.Provider value={{resultsArray,loadMorePhotos,perPageImages}}>
            <InputTextValue.Provider value={{inputTextRef,handleFetchPhotos}}>
                {children}
            </InputTextValue.Provider>
        </ResultsContext.Provider>
    )
}