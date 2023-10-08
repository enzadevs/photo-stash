'use client'

import { v4 as uuidv4 } from 'uuid'
import { getCuratedPhotos } from 'configs/pexels_config'
import ImageWrapper from 'components/Containers/ImageWrapper'

export default async function CuratedPhotos(){
    let currentPage = 0
    let perPageImages = 24
    const curatedPhotos = await new Promise (resolve => setTimeout(resolve(getCuratedPhotos(currentPage,perPageImages)), 3000))

    return (
        <div className='curated-photos-page-container margin-auto-1440'>
            <div className='curated-photos-wrapper'>
                {curatedPhotos?.map(photo=>{
                    return(
                        <ImageWrapper
                            key={uuidv4()}
                            src={photo.src.large2x + `?auto=compress&height=800&width=500`}
                            alt={photo.alt}
                            photographer={photo.photographer}
                            photostash_url={undefined}
                        />
                    )
                })}
            </div>
            <div className='load-more-container centre'>
                <button 
                    className='load-more-btn transition-fast radius-small' 
                    onClick={()=>{
                        undefined
                    }}
                    >Load more</button>
            </div>
        </div>
    )
}