import { getCuratedPhotos } from 'modules/pexels_config'
import ImageWrapper from '../ImageWrapper'

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
            <div className=''>
                Show 
            </div>
        </div>
    )
}