'use client'

import 'styles/components/image-wrapper.css'
import Link from 'next/link'
import CustomImage from './CustomImage'
import ThrowToast from 'components/Functions/Toaster'
import StartDownload from 'components/Functions/DownloadPhoto'
import { useRouter } from 'next/navigation'
import { FavouritePhotosStore } from 'global_states/FavouritePhotosStore'
import {BiSolidHeart,BiLinkExternal,BiSolidUser,BiDownload} from 'react-icons/bi'

export default function ImageWrapper({photoObj,src,alt,photographer,originalImg,photostash_url}){
    const updatePhotoObject = FavouritePhotosStore(state => state.updatePhotoObject)
    const addPhotoToLiked = FavouritePhotosStore(state => state.addPhotoToLiked)
    const router = useRouter()
    
    return (
        <div className='photo-wrapper radius-small' >
            <CustomImage src={src} alt={alt}/>
            <span className='image-buttons transition-fast hw100 radius-small'>
            <span className='layer-space hw100 radius-small' onClick={()=> router.push(`/core/photo/${photostash_url}`)}></span>
                <div className='top-right-buttons'>
                    <span
                        className='heart-icon-wrapper centre transition-fast radius-small ' 
                        onClick={()=>{
                            updatePhotoObject(photoObj)
                            addPhotoToLiked()
                        }}>
                        <BiSolidHeart className='image-icons'/>
                    </span>
                    <Link 
                        href={`/core/photo/${photostash_url}`}
                        target='_blank'
                        className='image-icons-wrapper next-link centre transition-fast radius-small'>
                        <BiLinkExternal className='image-icons'/>
                    </Link>
                </div>
                <div className='bottom-container'>
                    <span className='profile-icon-wrapper centre'>
                        <BiSolidUser className='image-icons'/>
                    </span>
                    <p className='photographer-name'>{photographer}</p>
                    <span
                        className='next-link download-icon-wrapper centre transition-fast radius-small '
                        onClick={()=>{
                            StartDownload(
                                {
                                    imageSource: originalImg,
                                    imageAlt: photoObj.url
                                }
                            )
                            ThrowToast()
                        }}
                    ><BiDownload className='image-icons'/></span>
                </div>
            </span>
        </div>
    )
}