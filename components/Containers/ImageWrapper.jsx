'use client'

import 'styles/components/image-wrapper.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { favouritePhotosStore } from 'app/en/favourites/page'
import JsFileDownloader from 'js-file-downloader'
import {BiSolidHeart,BiLinkExternal,BiSolidUser,BiDownload} from 'react-icons/bi'
import ThrowToast from 'components/Functions/Toaster'
const CustomImage = dynamic(() => import('./CustomImage'))

export default function ImageWrapper({photoObj,src,alt,photographer,quality,originalImg,photostash_url}){
    const updatePhotoObject = favouritePhotosStore(state => state.updatePhotoObject)
    const addPhotoToLiked = favouritePhotosStore(state => state.addPhotoToLiked)
    
    return (
        <div className='photo-wrapper radius-small' >
            <CustomImage
                src={src}
                alt={alt}
                quality={quality}
            />
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
                        target='_blank'
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
                        onClick={()=>{
                            new JsFileDownloader({
                                url: originalImg + `?height=1440&width=2048`,
                                nameCallback: function() {
                                    return alt + '.jpg'
                                },
                                timeout: 75000,
                                forceDesktopMode: true
                            })
                            ThrowToast()
                        }}
                        className='next-link download-icon-wrapper radius-small transition-fast centre'
                    ><BiDownload className='image-icons'/></span>
                </div>
            </span>
        </div>
    )
}