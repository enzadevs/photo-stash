import 'styles/animations/image-transition.css'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import ErrorImage from 'public/images/actions/error_pink.jpg'

export default async function CustomImage({src,alt}){
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
            style={{ width: '100%', height: 'auto' }}
            sizes="(max-width: 650px) calc((100vw - 30px - 15px) / 2), (max-width: 900px) calc((100vw - 30px - 15px) / 2), (max-width: 1440px) calc((100vw - 60px - 60px) / 3), (max-width: 1600px) calc((100vw - 160px - 60px) / 3), calc((1600pxpx - 160px - 60px) / 3)"
            onLoadingComplete={(image)=>{
                image.classList.remove('opacity-0')
            }}
            onError={()=>{
                setImgSource(ErrorImage)
            }}
        ></Image>
    )
}