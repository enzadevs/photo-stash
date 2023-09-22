'use client'

import Image from 'next/image'
import ErrorImage from 'public/images/actions/error_pink.jpg'
import { useState,useEffect } from 'react'

export default function CustomImage({src,alt,photographer,photostash_url}){
    const [ imgSource,setImgSource ] = useState(src)

    useEffect(()=>{
        setImgSource(src)
    }, [src])

    return (
        <Image
            className='custom-image-component'
            alt={alt}
            src={imgSource}
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
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