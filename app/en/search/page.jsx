'use client'

import ImageWrapper from 'components/Containers/ImageWrapper'

export default function SearchResults(){

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