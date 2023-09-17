import { getCuratedPhotos } from 'modules/pexels_config'
import ImageWrapper from 'components/Functions/ImageWrapper'
import Collage from 'public/images/randomcollage.jpg'
import CustomImage from '../CustomImage'
import Link from 'next/link'

export default async function IndexCuratedPhotos(){
    let res = await getCuratedPhotos()

    return (
        <div className='index-curated-images-container margin-auto-1440'>
            {res?.map( image =>{
                return(
                    <span className='index-curated-image'>
                        <ImageWrapper
                            src={image.src.original + `?h=800&w=600`}
                            alt={image.alt}
                            photographer={image.photographer}
                            photographer_url={image.photographer_url}
                        />
                    </span>
                )
            })}
            <Link href='/' className='more-curated-link next-link centre radius-small hw100 transition-fast'>
                More curated photos
                <CustomImage
                    src={Collage}
                    alt='collage'
                    className='more-curated-img'
                />
            </Link>
        </div>
    )
}