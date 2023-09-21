'use client'

import 'styles/components/image-wrapper.css'
import CustomImage from './CustomImage'

export default function ImageWrapper({src,alt,photographer,photostash_url}){
    return (
        <div className='photo-wrapper hw100'>
            <CustomImage
                src={src}
                alt={alt}
                photographer={photographer}
                photostash_url={photostash_url}
            />
        </div>
    )
}