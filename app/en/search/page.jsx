'use client'

import ImageWrapper from 'components/Containers/ImageWrapper'
import { useContext } from 'react'
import { ResultsContext,InputTextValue,CurrentPageContext } from 'contexts/SearchContext'

export default function SearchResults(){
    let {resultsArray} = useContext(ResultsContext)
    let {inputTextValue} = useContext(InputTextValue)


    return (
        <div className='search-results-container'>
            <div className='results-wrapper margin-auto-1440'>
                <span className='results-column'>
                    {resultsArray?.slice(0,10).map(item=>{
                        return(
                            <ImageWrapper
                            src={item.src.large2x}
                            alt={item.alt}
                            photographer={item.photographer}
                            photostash_url={item.photostash_url}
                        />
                        )
                    })}
                </span>
                <span className='results-column'>
                    {resultsArray?.slice(11,20).map(item=>{
                        return(
                            <ImageWrapper
                            src={item.src.large2x}
                            alt={item.alt}
                            photographer={item.photographer}
                            photostash_url={item.photostash_url}
                        />
                        )
                    })}
                </span>
                <span className='results-column'>
                    {resultsArray?.slice(21,30).map(item=>{
                        return(
                            <ImageWrapper
                            src={item.src.large2x}
                            alt={item.alt}
                            photographer={item.photographer}
                            photostash_url={item.photostash_url}
                        />
                        )
                    })}
                </span>
            </div>
        </div>
    )
}