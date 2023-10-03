import 'styles/layouts/curated.css'
import { v4 as uuidv4 } from 'uuid'
import { getCuratedPhotos } from 'configs/pexels_config'
import ImageWrapper from 'components/Containers/ImageWrapper'

export default function CuratePhotosPage(){
    const curatedPhotosArray = getCuratedPhotos(0,29)

    return (
        <div className='curated-photos-container margin-auto-1440'>
            <h3 className='curated-header'>Curated photos by Pexels team</h3>
            <div className='curated-wrapper'>
                {curatedPhotosArray?.map( photo =>{
                    return(
                        <ImageWrapper
                            key={uuidv4()}
                            src={photo.src.large2x}
                            alt={photo.alt}
                            photographer={photo.photographer}
                            photostash_url={undefined}
                        />
                    )
                })}
            </div>
            <div className='more-wrapper centre'>
                <button 
                    onClick={()=>{
                        handleLoadMorePhotos()
                    }}
                    className='load-more-btn centre transition-fast radius-small'
                    >Load more</button>
            </div>
        </div>
    )
}