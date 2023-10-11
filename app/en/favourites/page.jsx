'use client'

import { create } from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware'

export const favouritePhotosStore = create (
    persist(
        (set,get) => ({
            photoObject: 0,
            updatePhotoObject: photoObject => set(() => ({photoObject: photoObject})) ,
            favouritePhotosArray: [],
            addPhotoToLiked: () => set({favouritePhotos: get().favouritePhotosArray.push(get().photoObject)})
        }),
        {
            name: 'favourite-photos',
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export default function FavouritesPage(){
    const favouritePhotos = favouritePhotosStore(state => state.favouritePhotos)


    return (
        <div className='favourites-page margin-auto-1440'>
            <div className='favourites-wrapper'>
                
            </div>
        </div>
    )
}