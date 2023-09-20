import { Suspense } from 'react'
import IndexLoading from './IndexLoading'
import { getCuratedPhotos } from 'modules/pexels_config'
import ImageWrapper from '../ImageWrapper'

export default async function IndexCuratedImages(){
    const curatedPhotos = await getCuratedPhotos()

    return (
        <div className='index-curated-images-container margin-auto-1440'>
            <span className='column'>
                {curatedPhotos?.slice(0,5).map(photo=>{
                    return(
                        <span className='curated-photo-wrapper'>
                            <ImageWrapper
                                img_src={photo.src.original + `?auto=compress&h=600&w600`}
                                alt_txt={photo.alt}
                                className='index-curated-photo-itself'
                            />
                        </span>
                    )
                })}
            </span>
            <span className='column'>
                
            </span>
            <span className='column'>
                
            </span>
        </div>
    )
}