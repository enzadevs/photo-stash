import 'styles/animations/image-transition.css'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import ErrorImage from 'public/images/actions/error_pink.jpg'

export default async function CustomImage({src,alt,quality=80}){
    const [ imgSource,setImgSource ] = useState(src)

    useEffect(()=>{
        setImgSource(src)
    },[src])

    return (
        <Image
            className='custom-image-component radius-small image-opacity-fx duration opacity-0'
            alt={alt}
            src={imgSource}
            width={0}
            height={0}
            quality={quality}
            style={{ width: '100%', height: 'auto' }}
            sizes='(max-width: 500px) 100vw, (max-width: 850px) 70vw, 100vw'
            onLoadingComplete={(image)=>{
                image.classList.remove('opacity-0')
            }}
            onError={()=>{
                setImgSource(ErrorImage)
            }}
        ></Image>
    )
}