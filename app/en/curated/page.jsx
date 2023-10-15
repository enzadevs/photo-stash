'use client'

import './curated.css'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'
import { useCuratedPhotosStore } from 'global_states/CuratedPhotosStore'
import ImageWrapper from 'components/Containers/ImageWrapper'

export default function CuratedPhotos(){
    const curatedPhotosArray = useCuratedPhotosStore(state => state.curatedPhotosArray)
    const maxCuratedPhotosArray = useCuratedPhotosStore(state => state.maxCuratedPhotosArray)

    useEffect(()=>{
        maxCuratedPhotosArray()
    },[])

    return (
        <div className='margin-auto-1440'>
            <div className='curated-photos-wrapper'>
                {curatedPhotosArray?.map(photo=>{
                    return(
                        <ImageWrapper
                            key={uuidv4()}
                            src={photo.src.large2x + `?auto=compress&height=800&width=500`}
                            alt={photo.alt}
                            photographer={photo.photographer}
                            photostash_url={photo.id}
                            photoObj={photo}
                        />
                    )
                })}
            </div>
        </div>
    )
}