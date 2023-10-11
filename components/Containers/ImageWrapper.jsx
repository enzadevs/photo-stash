'use client'

import 'styles/components/image-wrapper.css'
import { Suspense } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ImageLoading from 'components/Functions/ImageLoading'
import CustomImage from './CustomImage'
import { favouritePhotosStore } from 'app/en/favourites/page'
import {BiSolidHeart,BiLinkExternal,BiSolidUser,BiDownload} from 'react-icons/bi'

export default function ImageWrapper({photoObj,src,alt,photographer,quality,originalImg,photostash_url}){
    const router = useRouter()
    const updatePhotoObject = favouritePhotosStore(state => state.updatePhotoObject)
    const addPhotoToLiked = favouritePhotosStore(state => state.addPhotoToLiked)

    return (
        <div className='photo-wrapper radius-small' >
            <Suspense fallback={<ImageLoading/>}>
                <CustomImage
                    src={src}
                    alt={alt}
                    quality={quality}
                />
            </Suspense>
            <span className='image-buttons hw100 transition-fast radius-small'>
                <div className='top-right-buttons'>
                    <span 
                        onClick={()=>{
                            updatePhotoObject(photoObj)
                            addPhotoToLiked()
                        }}
                        className='heart-icon-wrapper radius-small transition-fast centre'>
                        <BiSolidHeart className='image-icons'/>
                    </span>
                    <Link 
                        href={`/en/photo/${photostash_url}`}
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
                        className='next-link download-icon-wrapper radius-small transition-fast centre'
                    ><BiDownload className='image-icons'/></span>
                </div>
            </span>
        </div>
    )
}