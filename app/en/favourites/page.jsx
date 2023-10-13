'use client'

import { create } from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware'
import ImageWrapper from 'components/Containers/ImageWrapper'

export const favouritePhotosStore = create (
    persist(
        (set,get) => ({
            photoObject: 0,
            updatePhotoObject: photoObject => set(() => ({photoObject: photoObject})) ,
            favouritePhotosArray: [],
            addPhotoToLiked: () =>{
                if(get().favouritePhotosArray.includes(get().photoObject)){
                    alert('You already added this photo to favourites')
                } else {
                    set({favouritePhotos: get().favouritePhotosArray.push(get().photoObject)})
                }
            }
        }),
        {
            name: 'favourite-photos',
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export default function FavouritesPage() {
    const favouritePhotosArray = favouritePhotosStore(state => state.favouritePhotosArray)

    function FavPhotosArray(){
        return(
            <div className='favourites-wrapper'>
                {favouritePhotosArray?.map(photo =>{
                    return(
                        <ImageWrapper
                            src={photo.src.large2x}
                            alt={photo.alt}
                            photographer={photo.photographer}
                            photostash_url={photo.id}
                            quality={75}
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
        <div className='favourites-page margin-auto-1440' suppressHydrationWarning>
            {favouritePhotosArray.length <= 0 ? <NoLikedPhotos/> : <FavPhotosArray/>}
        </div>
    )
}