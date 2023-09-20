'use client'

import { useState,useEffect } from 'react'
import ErrorImage from 'public/images/actions/error_pink.jpg'

export default function CustomImage({src,alt,quality=100,className}){
    const [ imgSource,setImgSource ] = useState(src)

    useEffect(()=>{
        setImgSource(src)
    }, [src])

    return (
        <img
            className={className}
            src={imgSource}
            alt={alt}
            quality={quality}
            fill
            sizes='(max-width: 720px) 50vw, (max-width: 1440px) 100vw, 33vw'
            onLoadingComplete={(result) => {
                if (result.naturalWidth === 0) {
                    setImgSource(ErrorImage)
                }
            }}
            onError={()=>{
                setImgSource(ErrorImage)
            }}
        ></img>
    )
}