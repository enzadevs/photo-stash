'use client'

import 'styles/layouts/curated.css'
import { v4 as uuidv4 } from 'uuid'
import { useState,useEffect } from 'react'
import { getCuratedPhotos } from 'modules/pexels_config'
import ImageWrapper from 'components/Containers/ImageWrapper'

export default function CuratePhotosPage(){
    const [ currentPage,setCurrentPage ] = useState(0)
    const [ perPageImages,setPerPageImages ] = useState(24)

    return (
        <div className='curated-photos-container margin-auto-1440'>
            <h3 className='curated-header'>Curated photos by Pexels team</h3>
            <div className='curated-wrapper'>
                {curatedPhotos?.map( photo =>{
                    return(
                        <ImageWrapper
                            key={uuidv4()}
                            src={photo.src.large2x}
                            alt={photo.alt}
                            photographer={photo.photographer}
                            photostash_url={undefined}
                        />
                    )
                })}
            </div>
            <div className='more-wrapper centre'>
                <button 
                    onClick={()=>{
                        handleLoadMorePhotos()
                    }}
                    className='load-more-btn centre transition-fast radius-small'
                    >Load more</button>
            </div>
        </div>
    )
}