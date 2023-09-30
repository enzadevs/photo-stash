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
            className='custom-image-component radius-small'
            alt={alt}
            src={imgSource}
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto',objectFit: 'contain' }}
            sizes="(max-width: 650px) calc((100vw - 30px - 15px) / 2), (max-width: 900px) calc((100vw - 30px - 15px) / 2), (max-width: 1440px) calc((100vw - 60px - 60px) / 3), (max-width: 1600px) calc((100vw - 160px - 60px) / 3), calc((1600pxpx - 160px - 60px) / 3)"
            // ! sizes='100vw' check out performance with 100vw and code above
            onLoad={(res)=>{
                new Promise((resolve) => resolve(res))
            }}
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