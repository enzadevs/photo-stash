'use client'

import ImageWrapper from 'components/Containers/ImageWrapper'
import { useResultsStore } from 'components/Containers/QueryResults'

export default function SearchResults(){
    const resultsArray = useResultsStore((state) => state.resultsArray)

    return (
        <div className='search-results-container'>
            <div className='results-wrapper'>
            <h2>{resultsArray}</h2>
            </div>
        </div>
    )
}