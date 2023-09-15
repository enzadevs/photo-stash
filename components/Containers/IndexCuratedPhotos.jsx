import Link from 'next/link'
import { getCuratedPhotos } from 'modules/pexels_config'
import ImageContainer from './ImageContainer'

export default async function IndexCuratedPhotos(){
    let res = await getCuratedPhotos()

    return (
        <div className='index-curated-images-container margin-auto-1440'>
            {res?.map(image=>{
                return(
                    <Link href='/' className='next-link transition-fast index-curated-image-links '>
                        <ImageContainer>
                            <img
                                className='curated-image-itself radius-small transition-fast '
                                src={image.src.original + `?auto=compress&h=700&w500`}
                                alt={image.alt}
                                loading="lazy"
                            ></img>
                        </ImageContainer>
                    </Link>
                )
            })}
            <Link href='/en/curated' className='index-curated-link-div next-link centre transition-fast radius-small'>
                More curated photos
            </Link>
        </div>
    )
}