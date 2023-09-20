import 'styles/components/image-wrapper.css'
import CustomImage from './CustomImage'

export default function ImageWrapper({img_src,alt_txt,img_classname,photographer}){
    return (
        <div className='image-wrapper-div'>
            <CustomImage
                src={img_src}
                alt={alt_txt}
                className={img_classname}
            />
        </div>
    )
}