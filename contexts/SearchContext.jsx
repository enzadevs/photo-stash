'use client'

import { getSearchQueryPhotos } from "modules/pexels_config"
import { createContext,useState,useEffect } from "react"

export const ResultsContext = createContext()
export const InputTextValue = createContext()
export const CurrentPageContext = createContext()

export default function SearchResultsProvider({children}){
    const [ resultsArray,setResultsArray ] = useState([])
    const [ inputTextValue,setInputTextValue ] = useState('')
    const [ currentPage,setCurrentPage ] = useState(1)

    function handleInputTextValueChange(e){
        setInputTextValue(e.target.value)
    }

    const handleFetchSearchQueryResults = async() =>{
        if (inputTextValue == ''){
            alert('Empty string')
        } else {
            const res = await getSearchQueryPhotos(inputTextValue,currentPage)
            setResultsArray(res)
        }
    }

    return (
        <ResultsContext.Provider value={{resultsArray,handleFetchSearchQueryResults}}>
            <InputTextValue.Provider value={{inputTextValue,handleInputTextValueChange}}>
                <CurrentPageContext.Provider value={{currentPage}}>
                    {children}
                </CurrentPageContext.Provider>
            </InputTextValue.Provider>
        </ResultsContext.Provider>
    )
}