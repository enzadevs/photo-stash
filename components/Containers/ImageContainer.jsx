
import 'styles/components/image-container.css'

export default function ImageContainer({children}){
    return (
        <div className='image-container-div radius-small'>
            {children}
        </div>
    )
}