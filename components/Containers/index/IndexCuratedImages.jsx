import { getCuratedPhotos } from 'modules/pexels_config'
import ImageWrapper from '../ImageWrapper'

export default async function IndexCuratedImages(){
    let currentPage = 0

    const curatedPhotos = await getCuratedPhotos(currentPage)

    return (
        <div className='index-curated-images-container margin-auto-1440'>
            <span className='column'>
                {curatedPhotos?.slice(0,9).map(photo=>{
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
                {curatedPhotos?.slice(10,19).map(photo=>{
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
                {curatedPhotos?.slice(20,30).map(photo=>{
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