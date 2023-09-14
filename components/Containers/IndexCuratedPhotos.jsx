'use client'

import { useEffect,useState } from "react"
import { getCuratedPhotos } from 'modules/pexels_config'
import Link from 'next/link'
import ImageContainer from './ImageContainer'
import CustomImage from './CustomImage'

export default function IndexCuratedPhotos(){
    const [ curatedPhotos,setCuratedPhotos ] = useState([])

    const fetchCuratedImages = async()=>{
        let res = await getCuratedPhotos()
        setCuratedPhotos(res)
    }

    useEffect(()=>{
        fetchCuratedImages()
    }, [])

    return (
        <div className='index-curated-images-container margin-auto-1440'>
            {curatedPhotos?.map(image=>{
                return(
                    <Link href='/' className='next-link index-curated-image-links transition-fast'>
                        <ImageContainer>
                            <img
                                className='curated-image-itself radius-small'
                                src={image.src.original + `?auto=compress&h=700&w500`}
                                alt={image.alt}
                                loading="lazy"
                            ></img>
                        </ImageContainer>
                    </Link>
                )
            })}
        </div>
    )
}