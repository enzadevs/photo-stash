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
                        photostash_url={photo.id}
                        src={photo.src.large2x + `?auto=compress&height=800&width=500`}
                        originalImg={photo.src.original}
                        alt={photo.alt}
                        photographer={photo.photographer}
                        quality={75}
                    />
                )
            })}
        </div>
    )
}