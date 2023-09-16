import 'styles/components/image-container.css'
import {CiHeart} from 'react-icons/ci'
import {IoShareSocialOutline} from 'react-icons/io5'
import {AiOutlineUser} from 'react-icons/ai'

export default function ImageContainer({children,photographer}){
    return (
        <div className='image-container-div radius-small'>
            <span className='top-right-buttons'>
                <CiHeart className='img-cont-icons'/>
                <IoShareSocialOutline className='img-cont-icons'/>
            </span>
            <span className='image-container radius-small'>
                {children}
            </span>
            <span className='bottom-container'>
                <AiOutlineUser className='img-cont-icons'/>
                <p className='img-cont-photographer-name'>francisco diaz</p>
            </span>
        </div>
    )
}