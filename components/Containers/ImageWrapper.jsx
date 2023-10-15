'use client'

import 'styles/components/image-wrapper.css'
import Link from 'next/link'
import { FavouritePhotosStore } from 'global_states/FavouritePhotosStore'
import {BiSolidHeart,BiLinkExternal,BiSolidUser,BiDownload} from 'react-icons/bi'
import ThrowToast from 'components/Functions/Toaster'
import CustomImage from './CustomImage'
import StartDownload from 'components/Functions/DownloadPhoto'

export default function ImageWrapper({photoObj,src,alt,photographer,originalImg,photostash_url}){
    const updatePhotoObject = FavouritePhotosStore(state => state.updatePhotoObject)
    const addPhotoToLiked = FavouritePhotosStore(state => state.addPhotoToLiked)
    
    return (
        <div className='photo-wrapper radius-small' >
            <CustomImage
                src={src}
                alt={alt}
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
                            StartDownload(
                                {
                                    imageSource: originalImg,
                                    imageAlt: photoObj.url
                                }
                            )
                            ThrowToast()
                        }}
                        className='next-link download-icon-wrapper radius-small transition-fast centre'
                    ><BiDownload className='image-icons'/></span>
                </div>
            </span>
        </div>
    )
}