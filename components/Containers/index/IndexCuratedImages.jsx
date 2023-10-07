import { getCuratedPhotos } from 'configs/pexels_config'
import { v4 as uuidv4 } from 'uuid'
import ImageWrapper from '../ImageWrapper'

export default async function IndexCuratedImages(){
    let currentPage = 0
    let perPageImages = 23
    const curatedPhotos = await new Promise (resolve => setTimeout(resolve(getCuratedPhotos(currentPage,perPageImages)), 3000))

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