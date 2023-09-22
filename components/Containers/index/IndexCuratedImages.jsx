import { Suspense } from 'react'
import IndexLoading from './IndexLoading'
import { getCuratedPhotos } from 'modules/pexels_config'
import ImageWrapper from '../ImageWrapper'

export default async function IndexCuratedImages(){
    const curatedPhotos = await getCuratedPhotos()

    return (
        <div className='index-curated-images-container margin-auto-1440'>
            <span className='column'>
                {curatedPhotos?.slice(0,7).map(photo=>{
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
                {curatedPhotos?.slice(8,14).map(photo=>{
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
                {curatedPhotos?.slice(16,23).map(photo=>{
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