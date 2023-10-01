'use client'

import { getCuratedPhotos } from 'modules/pexels_config'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import ImageWrapper from '../ImageWrapper'
import Image from 'next/image'
import Link from 'next/link'
import FlowerImage from '/public/images/close-up-gladiolus-flower-details.jpg'

export default async function IndexCuratedImages(){
    const [ currentPage,setCurrentPage ] = useState(0)
    const [ perPageImages,setPerPageImages ] = useState(20)
    const curatedPhotos = await getCuratedPhotos(currentPage,perPageImages)

    return (
        <div className='columns-container margin-auto-1440'>
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
            <div className='show-more-div-container centre radius-small'>
                <Image
                    className='flower-image radius-small'
                    src={FlowerImage}
                    alt='collage image of random photos'
                    height={700}
                    width={460}
                ></Image>
                <Link href='/en/curated' className='next-link more-curated-link hw100 centre radius-small transition-fast'>
                    More curated photos
                </Link>
            </div>
        </div>
    )
}