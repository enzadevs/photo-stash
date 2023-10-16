'use client'

import './search.css'
import { v4 as uuidv4 } from 'uuid'
import ImageWrapper from 'components/Containers/ImageWrapper'
import { useResultsStore } from 'global_states/QueryResults'

export default function SearchResults(){
    const resultsArray = useResultsStore((state) => state.resultsArray)

    function ResultsWrapper(){
        return(
            <div className='results-wrapper'>
                {resultsArray?.map(photo=>{
                    return(
                        <ImageWrapper
                            key={uuidv4()}
                            photoObj={photo}
                            photostash_url={photo.id}
                            originalImg={photo.src.original}
                            photographer={photo.photographer}
                            src={photo.src.large2x + `?auto=compress&height=800&width=500`}
                            alt={photo.alt}
                        />
                    )
                })}
            </div>
        )
    }
    
    function EmptySearch(){
        return(
            <p className='empty-search-text'>Please type some words in search box.</p>
        )
    }

    return (
        <div className='margin-auto-1440'>
            {resultsArray.length <= 0 ? <EmptySearch/> : <ResultsWrapper/>}
        </div>
    )
}