'use client'

import { lazy } from 'react'
import { Suspense } from 'react'
const ImageWrapper = lazy(() => import('components/Containers/ImageWrapper.jsx'))
import ImagesLoading from 'components/Functions/ImagesLoading'
import { useContext } from 'react'
import { ResultsContext,CurrentPageContext } from 'contexts/SearchContext'

export default function SearchResults(){
    let {resultsArray} = useContext(ResultsContext)

    return (
        <div className='search-results-container'>
            <div className='results-wrapper'>
                <Suspense fallback={<ImagesLoading/>}>    
                    {resultsArray?.map(photo=>{
                        return(
                            <ImageWrapper
                                src={photo.src.large2x}
                                alt={photo.alt}
                                photographer={photo.photographer}
                                photostash_url={undefined}
                            />
                        )
                    })}
                </Suspense>
            </div>
        </div>
    )
}