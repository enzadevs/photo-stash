'use client'

import ImageWrapper from 'components/Containers/ImageWrapper'
import { useContext } from 'react'
import { ResultsContext} from 'contexts/SearchContext'

export default function SearchResults(){
    const {resultsArray,loadMorePhotos,perPageImages} = useContext(ResultsContext)

    return (
        <div className='search-results-container'>
            <div className='results-wrapper'>  
                {resultsArray.photos?.map(photo=>{
                    return(
                        <ImageWrapper
                            src={photo.src.large}
                            alt={photo.alt}
                            photographer={photo.photographer}
                            photostash_url={undefined}
                        />
                    )
                })}
            </div>
            <button onClick={loadMorePhotos}>
                CLICK
            </button>
            <h1>{perPageImages}</h1>
        </div>
    )
}