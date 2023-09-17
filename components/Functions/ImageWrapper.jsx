import 'styles/components/image-wrapper.css'
import CustomImage from 'components/Containers/CustomImage'
import Link from 'next/link'
import {FaHeart} from 'react-icons/fa'
import {FiLink} from 'react-icons/fi'
import {FaUser} from 'react-icons/fa'
import {GoDownload} from 'react-icons/go'

export default function ImageWrapper({src,alt,photographer,photographer_url,className}){

    return (
        <div className='image-container transition-fast radius-small'>
            <CustomImage
                src={src}
                alt={alt}
                className='custom-image'
            />
            <span className='image-buttons-container transition-fast hw100'>
                <span className='top-right-buttons transition-fast'>
                    <span className='heart-icon-wrapper radius-small centre transition-fast'>
                        <FaHeart className='image-icons'/> 
                    </span>
                    <span className='wrapper-image-icons-container radius-small centre transition-fast'>
                        <FiLink className='image-icons'/>
                    </span>
                </span>
                <span className='bottom-options-span radius-small'>
                    <span className='photographer-icon-wrapper centre transition-fast'>
                        <FaUser className='image-icons'/>
                    </span>
                    <p className='photographer-txt'>{photographer}</p>
                    <Link href='/' className='external-link-icon next-link radius-small centre transition-fast'>
                        <GoDownload className='image-icons'/>
                    </Link>
                </span>
            </span>
        </div>
    )
}