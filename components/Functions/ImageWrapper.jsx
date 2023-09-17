
import 'styles/components/image-wrapper.css'
import CustomImage from 'components/Containers/CustomImage'
import Link from 'next/link'
import {FaHeart} from 'react-icons/fa'
import {FiLink} from 'react-icons/fi'
import {FaUser} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'

export default function ImageWrapper({src,alt,photographer,photographer_url,className}){

    return (
        <div className='image-container transition-fast radius-small'>
            <CustomImage
                src={src}
                alt={alt}
            />
            <span className='image-buttons-container transition-fast hw100'>
                <span className='top-right-buttons transition-fast'>
                    <span className='wrapper-image-icons-container radius-small centre transition-fast'>
                        <FaHeart className='heart-icon icons'/> 
                    </span>
                    <span className='wrapper-image-icons-container radius-small centre transition-fast'>
                        <FiLink className='icons'/>
                    </span>
                </span>
                <span className='bottom-options-span'>
                    <FaUser className='image-icons'/>
                    <Link href={photographer_url} className='next-link photographer-txt'>{photographer}</Link>
                    <Link href='/' className='next-link external-link-icon radius-small centre transition-fast'>
                        <BiLinkExternal className='image-icons'/>
                    </Link>
                </span>
            </span>
        </div>
    )
}