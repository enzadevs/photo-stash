'use client'

import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'
import ImageWrapper from 'components/Containers/ImageWrapper'
import { useResultsStore } from 'global_states/QueryResults'

export default function SearchResults(){
    const resultsArray = useResultsStore((state) => state.resultsArray)

    useEffect(()=>{
        console.log('Mounted')
    },[])

    function ResultsWrapper(){
        return(
            <div className='results-wrapper'>
                {resultsArray.map(photo=>{
                    return(
                        <ImageWrapper
                            key={uuidv4()}
                            photoObj={photo}
                            photostash_url={photo.id}
                            originalImg={photo.src.original}
                            src={photo.src.large2x + `?auto=compress&height=800&width=500`}
                            photographer={photo.photographer}
                            alt={photo.alt}
                        />
                    )
                })}
            </div>
        )
    }
    
    function EmptySearch(){
        return(
            <p className='empty-search-text centre'>Please type some words in search box.</p>
        )
    }

    return (
        <div className='search-results-container'>
            {resultsArray.length <= 0 ? <EmptySearch/> : <ResultsWrapper/>}
        </div>
    )
}