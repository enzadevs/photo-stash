'use client'

import { getSearchQueryPhotos } from "modules/pexels_config"
import { createContext,useState,useRef } from "react"

export const ResultsContext = createContext()
export const InputTextValue = createContext()

export default function SearchResultsProvider({children}){
    const [ resultsArray,setResultsArray ] = useState([])
    const [ currentPage,setCurrentPage ] = useState(1)

    const inputTextRef = useRef('')
    
    const handleFetchPhotos = async() =>{
        const inputTextValue = inputTextRef.current.value
        if (inputTextValue === ''){
            alert('Empty input field')
        } else {
            const res = await getSearchQueryPhotos(inputTextValue,currentPage)
            setResultsArray(res)
        }
    }

    return (
        <ResultsContext.Provider value={{resultsArray}}>
            <InputTextValue.Provider value={{inputTextRef,handleFetchPhotos}}>
                {children}
            </InputTextValue.Provider>
        </ResultsContext.Provider>
    )
}