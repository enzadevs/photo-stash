'use client'

import 'styles/components/image-wrapper.css'
import Link from 'next/link'
import { Suspense } from 'react'
import ImageLoading from 'components/Functions/ImageLoading'
import CustomImage from './CustomImage'
import {BiSolidHeart,BiLinkExternal,BiSolidUser,BiDownload} from 'react-icons/bi'

export default function ImageWrapper({src,alt,photographer,quality,photostash_url}){
    return (
        <div className='photo-wrapper radius-small'>
            <Suspense fallback={<ImageLoading/>}>
                <CustomImage
                    src={src}
                    alt={alt}
                    quality={quality}
                />
            </Suspense>
            <span className='image-buttons hw100 transition-fast radius-small'>
                <div className='top-right-buttons'>
                    <span className='heart-icon-wrapper radius-small transition-fast centre'>
                        <BiSolidHeart className='image-icons'/>
                    </span>
                    <Link 
                        href={src}
                        className='next-link image-icons-wrapper radius-small transition-fast centre'>
                        <BiLinkExternal className='image-icons'/>
                    </Link>
                </div>
                <div className='bottom-container'>
                    <span className='profile-icon-wrapper centre'>
                        <BiSolidUser className='image-icons'/>
                    </span>
                    <p className='photographer-name'>{photographer}</p>
                    <span
                        className='download-icon-wrapper radius-small transition-fast centre'
                    ><BiDownload className='image-icons'/></span>
                </div>
            </span>
        </div>
    )
}