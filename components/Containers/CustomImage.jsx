'use client'

import { useImage } from 'react-image'
import { Suspense,useState } from 'react'
import Image from 'next/image'
import ImageLoading from 'components/Functions/ImageLoading'
import ErrorImage from 'public/images/actions/error_image.jpg'

function ImageComponent({src,alt}){
    const [ imageSource,setImageSource ] = useState(src)

    useImage({
        srcList: src
    })
    
    return <Image
            className='custom-image-component radius-small image-opacity-fx duration opacity-0'
            alt={alt}
            src={imageSource}
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            onLoadingComplete={(image)=>{
                image.classList.remove('opacity-0')
            }}
            onError={()=>{
                setImageSource(ErrorImage)
            }}
        ></Image>
}

export default function CustomImage({src,alt}){
    return (
        <Suspense fallback={<ImageLoading/>}>
            <ImageComponent src={src} alt={alt}/>
        </Suspense>
    )
}