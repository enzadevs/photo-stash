'use client'

import Image from 'next/image'
import { useState,useEffect } from 'react'

export default function CustomImageComponent({src,alt,className,quality,...rest}){
    const [ imgSource,setImgSource ] = useState(src)

    useEffect(()=>{
        setImgSource(src)
    }, [src])

    return (
        <div className='custom-image-container'>
            <Image
                src={src}
                alt={alt}
                quality={quality}
                fill
            ></Image>
        </div>
    )
}