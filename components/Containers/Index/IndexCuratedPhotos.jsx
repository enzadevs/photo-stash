import { getCuratedPhotos } from 'modules/pexels_config'
import ImageWrapper from 'components/Functions/ImageWrapper'

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
        </div>
    )
}