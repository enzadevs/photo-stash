'use client'

import Image from 'next/image'
import { useState,useEffect } from 'react'

export default function CustomImage({src,alt,className,quality,...rest}){
    const [ imgSource,setImgSource ] = useState(src)

    useEffect(()=>{
        setImgSource(src)
    }, [src])

    return (
        <Image
            src={src}
            alt={alt}
            quality={85}
            sizes='(max-width: 720px) 100vw, (max-width: 1440px) 50vw, 33vw'
            fill
        ></Image>
    )
}