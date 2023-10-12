const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY

import CustomImage from 'components/Containers/CustomImage'

export async function generateMetadata({params}) {
    let id = params.photoID

    const photo = await fetch(`https://api.pexels.com/v1/photos/${id}`,
        {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then ((res) => res.json())

    return {
        title: 'Photo of: ' + photo.alt,
        description: 'Photo of: ' + photo.alt + '.',
        params: photo.id
    }
}

export default async function PhotoPage({params}){
    let id = params.photoID
    
    const photo = await fetch(`https://api.pexels.com/v1/photos/${id}`,
        {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then ((res) => res.json())

    return (
        <img
            src={photo.src.original}
            alt={photo.alt}
            className='heyo'
        />
        
    )
}