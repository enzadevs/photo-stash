import { getCuratedPhotos } from 'modules/pexels_config'
import ImageWrapper from '../ImageWrapper'

export default async function IndexCuratedImages(){
    const curatedPhotos = await getCuratedPhotos()

    return (
        <div className='index-curated-images-container margin-auto-1440'>
            <span className='column'>
                {curatedPhotos?.slice(0,8).map(photo=>{
                    return(
                        <ImageWrapper
                            src={photo.src.large2x}
                            alt={photo.alt}
                            photographer={photo.photographer}
                            photostash_url={photo.photostash_url}
                        />
                    )
                })}
            </span>
            <span className='column'>
                {curatedPhotos?.slice(9,18).map(photo=>{
                    return(
                        <ImageWrapper
                            src={photo.src.large2x}
                            alt={photo.alt}
                            photographer={photo.photographer}
                            photostash_url={photo.photostash_url}
                        />
                    )
                })}
            </span>
            <span className='column'>
                {curatedPhotos?.slice(19,27).map(photo=>{
                    return(
                        <ImageWrapper
                            src={photo.src.large2x}
                            alt={photo.alt}
                            photographer={photo.photographer}
                            photostash_url={photo.photostash_url}
                        />
                    )
                })}
            </span>
        </div>
    )
}