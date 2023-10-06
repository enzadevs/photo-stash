'use client'

import ImageWrapper from 'components/Containers/ImageWrapper'
import { useResultsStore } from 'components/Containers/QueryResults'

export default function SearchResults(){
    const resultsArray = useResultsStore((state) => state.resultsArray)
    const updateResultsArray = useResultsStore((state)=>(state.updateResultsArray))

    return (
        <div className='search-results-container'>
            <div className='results-wrapper'>
            </div>
        </div>
    )
}