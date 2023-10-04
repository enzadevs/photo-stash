'use client'

import ImageWrapper from 'components/Containers/ImageWrapper'
import { useContext } from 'react'
import { SearchResultsContext } from '../layout'

export default function SearchResults(){
    let {resultsArray,setPhotos} = useContext(SearchResultsContext)

    return (
        <div className='search-results-container'>
            <div className='results-wrapper'>  
                {/* {resultsArray.photos?.map(photo=>{
                    return(
                        <ImageWrapper
                            src={photo.src.large}
                            alt={photo.alt}
                            photographer={photo.photographer}
                            photostash_url={undefined}
                        />
                    )
                })} */}
            </div>
        </div>
    )
}