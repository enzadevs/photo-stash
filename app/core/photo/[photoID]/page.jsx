const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY

import styles from './photo.module.css'
import Image from 'next/image'
import PhotoBottomFunctions from 'components/Containers/core/PhotoBottomFunctions'

export async function generateMetadata({params}) {
    let id = params.photoID
    const photo = await fetch(`https://api.pexels.com/v1/photos/${id}`,
        {
            headers: {
                Authorization: API_KEY
            }
        })
        .then ((res) => res.json())

    return {
        title: 'Photo by : ' + photo.photographer,
        description: 'Photo of: ' + photo.alt + 'at Photo Stash.'
    }
}

export default async function PhotoPage({params}){
    let id = params.photoID
    const photo = await fetch(`https://api.pexels.com/v1/photos/${id}`,
        {
            headers: {
                Authorization: API_KEY
            }
        })
        .then ((res) => res.json())

    return (
        <div className={styles.photo_page_container}>
            <h3 className={styles.photo_header}>{photo.alt}</h3>
            <div className={styles.photo_container}>
                <Image
                    src={photo.src.large2x}
                    alt={photo.alt}
                    className={styles.photo_large}
                    width={0}
                    height={0}
                    style={{ width: '100%', height: 'auto' }}
                    sizes='100vw'
                ></Image>
            </div>
            <PhotoBottomFunctions 
                styles={styles}
                photographer={photo.photographer}
                photographer_url={photo.photographer_url}
                pexels_url={photo.url}
                originalImg={photo.src.original}
                url={photo.url}
            />
        </div>
    )
}