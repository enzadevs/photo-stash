'use client'

import { useContext } from 'react'
import { ResultsContext } from 'contexts/SearchContext'

export default function SearchResults(){
    let {resultsArray} = useContext(ResultsContext)

    return (
        <div className='search-results-container'>
            <div className='results-wrapper margin-auto-1440'>
                Hop Hey La La Ley
            </div>
        </div>
    )
}