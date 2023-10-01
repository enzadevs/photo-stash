import Image from 'next/image'
import ErrorImage from 'public/images/actions/error_pink.jpg'
import { useState } from 'react'

export default async function CustomImage({src,alt}){
    const [ imgSource,setImgSource ] = useState(src)
    await new Promise((resolve) => setTimeout(resolve, 1250))

    return (
        <Image
            className='custom-image-component radius-small'
            alt={alt}
            src={imgSource}
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            sizes="(max-width: 650px) calc((100vw - 30px - 15px) / 2), (max-width: 900px) calc((100vw - 30px - 15px) / 2), (max-width: 1440px) calc((100vw - 60px - 60px) / 3), (max-width: 1600px) calc((100vw - 160px - 60px) / 3), calc((1600pxpx - 160px - 60px) / 3)"
            onError={()=>{
                setImgSource(ErrorImage)
            }}
        ></Image>
    )
}