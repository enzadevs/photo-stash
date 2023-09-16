
import { getCuratedPhotos } from 'modules/pexels_config'

export default async function IndexCuratedPhotos(){
    let res = await getCuratedPhotos()

    return (
        <div className='index-curated-images-container margin-auto-1440'>
            
        </div>
    )
}