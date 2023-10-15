import { create } from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware'

export const FavouritePhotosStore = create (
    persist(
        (set,get) => ({
            photoObject: undefined,
            updatePhotoObject: photoObject => set(() => ({photoObject: photoObject})) ,
            favouritePhotosArray: [],
            addPhotoToLiked: () =>{
                if(get().favouritePhotosArray.includes(get().photoObject)){
                    alert('You already added this photo to favourites')
                } else {
                    set({favouritePhotos: get().favouritePhotosArray.push(get().photoObject)})
                }
            },
            clearAllLikedPhotos: () => set({favouritePhotosArray: []})
        }),
        {
            name: 'favourite-photos',
            storage: createJSONStorage(() => localStorage)
        }
    )
)