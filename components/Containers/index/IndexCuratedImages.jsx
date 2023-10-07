import { getCuratedPhotos } from 'configs/pexels_config'
import { v4 as uuidv4 } from 'uuid'
import ImageWrapper from '../ImageWrapper'
import Image from 'next/image'
import Link from 'next/link'
import FlowerImage from '/public/images/close-up-gladiolus-flower-details.jpg'

export default async function IndexCuratedImages(){
    let currentPage = 0
    let perPageImages = 23
    const curatedPhotos = await getCuratedPhotos(currentPage,perPageImages)

    return (
        <div className='columns-container margin-auto-1440'>
            {curatedPhotos?.map( photo =>{
                return(
                    <ImageWrapper
                        key={uuidv4()}
                        src={photo.src.large2x + `?auto=compress&height=800&width=500`}
                        alt={photo.alt}
                        photographer={photo.photographer}
                        photostash_url={undefined}
                        quality={50}
                    />
                )
            })}
        </div>
    )
}