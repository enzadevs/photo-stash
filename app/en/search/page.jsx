'use client'

import { useContext } from 'react'
import { ResultsContext } from 'contexts/SearchContext'
import ImageWrapper from 'components/Functions/ImageWrapper'

export default function SearchResults(){
    let {resultsArray} = useContext(ResultsContext)

    return (
        <div className='search-results-container'>
            <div className='results-wrapper margin-auto-1440'>
                {resultsArray?.map(item=>{
                    return(
                        <span className='result-image'>
                            
                        </span>
                    )
                })}
            </div>
        </div>
    )
}