'use client'

import 'styles/components/image-wrapper.css'
import CustomImage from './CustomImage'
import {BiSolidHeart,BiLinkExternal,BiSolidUser,BiDownload} from 'react-icons/bi'

export default function ImageWrapper({src,alt,photographer,photostash_url}){
    return (
        <div className='photo-wrapper radius-small'>
            <CustomImage
                src={src}
                alt={alt}
                photographer={photographer}
                photostash_url={photostash_url}
            />
            <span className='image-buttons hw100 radius-small transition-fast'>
                <div className='top-right-buttons'>
                    <span className='heart-icon-wrapper radius-small transition-fast centre'>
                        <BiSolidHeart className='image-icons'/>
                    </span>
                    <span className='image-icons-wrapper radius-small transition-fast centre'>
                        <BiLinkExternal className='image-icons'/>
                    </span>
                </div>
                <div className='botttom-container'>
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