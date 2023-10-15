'use client'

import './fav.css'
import { v4 as uuidv4 } from 'uuid'
import { FavouritePhotosStore } from 'global_states/FavouritePhotosStore'
import ImageWrapper from 'components/Containers/ImageWrapper'

export default function FavouritesPage() {
    const favouritePhotosArray = FavouritePhotosStore(state => state.favouritePhotosArray)
    const clearAllLikedPhotos = FavouritePhotosStore(state => state.clearAllLikedPhotos)

    function FavPhotosArray(){
        return(
            <div className='favourites-wrapper'>
                {favouritePhotosArray?.map(photo =>{
                    return(
                        <ImageWrapper
                            key={uuidv4()}
                            photoObj={photo}
                            photostash_url={photo.id}
                            originalImg={photo.src.original}
                            src={photo.src.large2x + `?auto=compress&height=800&width=500`}
                            photographer={photo.photographer}
                            alt={photo.alt}
                        />
                    )
                })}
            </div>
        )
    }

    function NoLikedPhotos(){
        return <p className='no-liked-photos centre'>Please like some photos to see them here</p>
    }

    return (
        <div className='margin-auto-1440' suppressHydrationWarning>
            {favouritePhotosArray.length <= 0 ? <NoLikedPhotos/> : <FavPhotosArray/>}
            <div className='remove-all-photos-container centre'>
                {favouritePhotosArray.length <= 0 ? 
                '' 
                : 
                <button onClick={clearAllLikedPhotos} className='remove-button radius-small transition-fast'>
                    Remove all liked photos
                </button>
                }
            </div>
        </div>
    )
}