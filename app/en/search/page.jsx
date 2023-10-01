'use client'

import ImageWrapper from 'components/Containers/ImageWrapper'
import { useContext } from 'react'
import { ResultsContext,CurrentPageContext } from 'contexts/SearchContext'

export default function SearchResults(){
    let {resultsArray} = useContext(ResultsContext)

    return (
        <div className='search-results-container'>
            <div className='results-wrapper'>  
                {resultsArray?.map(photo=>{
                    return(
                        <ImageWrapper
                            src={photo.src.medium}
                            alt={photo.alt}
                            photographer={photo.photographer}
                            photostash_url={undefined}
                        />
                    )
                })}
            </div>
        </div>
    )
}