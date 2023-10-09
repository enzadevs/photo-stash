'use client'
export const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY

import { lazy } from 'react'
import Link from 'next/link'
import { Suspense } from 'react'
import 'styles/components/image-wrapper.css'
import {BiSolidHeart,BiLinkExternal,BiSolidUser,BiDownload} from 'react-icons/bi'
import ImageLoading from 'components/Functions/ImageLoading'
const CustomImage = lazy(() => import('/components/Containers/CustomImage.jsx'))

export default function ImageWrapper({src,alt,photographer,quality,photostash_url}){
    function downloadImage() {
        const imageFile = fetch(src,
            {
                method: 'GET'
            },
            {
                headers: {
                  Authorization: API_KEY,
                },
            }
        )
        const photo = imageFile
        return photo
    } 

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
                    <span className='download-icon-wrapper radius-small transition-fast centre'>
                        <BiDownload className='image-icons'/>
                    </span>
                </div>
            </span>
        </div>
    )
}