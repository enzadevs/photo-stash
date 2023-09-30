import { getCuratedPhotos } from 'modules/pexels_config'
import ImageWrapper from '../ImageWrapper'
import Image from 'next/image'
import Link from 'next/link'
import FlowerImage from '/public/images/close-up-gladiolus-flower-details.jpg'

export default async function IndexCuratedImages(){
    let currentPage = 0
    const curatedPhotos = await getCuratedPhotos(currentPage)

    return (
        <div className='columns-container margin-auto-1440'>
            {curatedPhotos?.map( photo =>{
                return(
                    <ImageWrapper
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