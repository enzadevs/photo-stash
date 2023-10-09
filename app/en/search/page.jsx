'use client'

import ImageWrapper from 'components/Containers/ImageWrapper'
import { useResultsStore } from 'global_states/QueryResults'

export default function SearchResults(){
    const resultsArray = useResultsStore((state) => state.resultsArray)

    function ResultsWrapper(){
        return(
            <div className='results-wrapper'>
                {resultsArray.map(photo=>{
                    return(
                        <ImageWrapper
                            src={photo.src.large2x + `?auto=compress&height=800&width=500`}
                            alt={photo.alt}
                            photographer={photo.photographer}
                            photostash_url={undefined}
                        />
                    )
                })}
            </div>
        )
    }
    
    function EmptySearch(){
        return(
            <p className='centre'>Please type some words in search box.</p>
        )
    }

    function Results(){
        if (resultsArray.length <= 0){
            return <EmptySearch/>
        } else {
            return <ResultsWrapper/>
        }
    }

    function BottomNavButtons(){
        return(
            <div className='search-page-bottom-nav-buttons'>
                <button className='nav-buttons transition radius-small'>
                    Prev
                </button>
                <button className='nav-buttons transition radius-small'>
                    Next
                </button>
            </div>
        )
    }

    return (
        <div className='search-results-container'>
            <Results/>
            {resultsArray.length === 0 ? '' : <BottomNavButtons/>}
        </div>
    )
}