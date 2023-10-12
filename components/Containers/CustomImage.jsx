'use client'

import 'styles/animations/image-transition.css'
import { useState } from 'react'
import Image from 'next/image'
import ErrorImage from 'public/images/actions/error_pink.jpg'

export default async function CustomImage({src,alt,quality=75}){
    const [ imgSrc,setImgSource ] = useState(src)

    return (
        <Image
            className='custom-image-component radius-small image-opacity-fx duration opacity-0'
            alt={alt}
            src={imgSrc}
            width={0}
            height={0}
            quality={quality}
            style={{ width: '100%', height: 'auto' }}
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            onLoadingComplete={(image)=>{
                image.classList.remove('opacity-0')
            }}
            onError={()=>{
                setImgSource(ErrorImage)
            }}
        ></Image>
    )
}