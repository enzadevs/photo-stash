'use client'

import Image from 'next/image'
import ErrorImage from 'public/images/actions/error_pink.jpg'
import { useState,useEffect } from 'react'

export default function CustomImage({src,alt,quality=100}){
    const [ imgSource,setImgSource ] = useState(src)

    useEffect(()=>{
        setImgSource(src)
    }, [src])

    return (
        <Image
            className='custom-image'
            src={imgSource}
            alt={alt}
            quality={quality}
            fill
            sizes='(max-width: 720px) 50vw, (max-width: 1440px) 100vw, 33vw'
            // placeholder='blur'
            // blurDataURL='public/images/actions/blur_img.jpg'
            onLoadingComplete={(result) => {
                if (result.naturalWidth === 0) {
                    setImgSource(ErrorImage)
                }
            }}
            onError={()=>{
                setImgSource(ErrorImage)
            }}
        ></Image>
    )
}