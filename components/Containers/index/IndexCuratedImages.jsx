'use client'

import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'
import { useCuratedPhotosStore } from 'global_states/CuratedPhotosStore'
import ImageWrapper from '../ImageWrapper'

export default async function IndexCuratedImages(){
    const curatedPhotosArray = useCuratedPhotosStore(state => state.curatedPhotosArray)
    const minCuratedPhotos = useCuratedPhotosStore(state => state.minCuratedPhotos)

    useEffect(() =>{
        minCuratedPhotos()
    }, [])

    return (
        <div className='columns-container margin-auto-1440'>
            {curatedPhotosArray?.map( photo =>{
                return(
                    <ImageWrapper
                        key={uuidv4()}
                        photoObj={photo}
                        photostash_url={photo.id}
                        originalImg={photo.src.original}
                        src={photo.src.large2x + `?auto=compress&height=800&width=500`}
                        photographer={photo.photographer}
                        alt={photo.alt}
                    />
                )
            })}
        </div>
    )
}