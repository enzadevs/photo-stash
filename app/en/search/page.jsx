'use client'

import ImageWrapper from 'components/Containers/ImageWrapper'
import { useResultsStore } from 'components/Containers/QueryResults'

export default function SearchResults(){
    const resultsArray = useResultsStore((state) => state.resultsArray)

    return (
        <div className='search-results-container'>
            <div className='results-wrapper'>
            {resultsArray.map(item=>{
                return(
                    <p>{item.id}</p>
                )
            })}
            </div>
        </div>
    )
}