import { Suspense } from 'react'
import IndexLoading from './IndexLoading'
import { getCuratedPhotos } from 'modules/pexels_config'
import ImageWrapper from '../ImageWrapper'

export default async function IndexCuratedImages(){
    const curatedPhotos = await getCuratedPhotos()

    return (
        <div className='index-curated-images-container margin-auto-1440'>
            {curatedPhotos?.map(item=>{
                return(
                    <ImageWrapper
                        src={item.src.large2x}
                        alt={item.alt}
                        photographer={item.photographer}
                        photostash_url={undefined}
                    />
                )
            })}
        </div>
    )
}