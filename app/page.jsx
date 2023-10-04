import 'styles/layouts/index.css'
import 'styles/animations/image-transition.css'
import Image from 'next/image'
import IndexBGImage from 'public/images/beautiful-trees-lake-rubber-plantation-kerala-india.jpg'
import IndexNavBar from 'components/Containers/index/IndexNavBar'
import SearchBox from 'components/Functions/SearchBox'
import IndexCuratedImages from 'components/Containers/index/IndexCuratedImages'
import Footer from 'components/Navigation/Footer'

export default function HomePage(){

    return (
        <div className='index-page-container'>
            <span className='index-top-container'>
                <Image
                    className='index-bg-image image-opacity-fx duration'
                    src={IndexBGImage}
                    quality={50}
                    priority={true}
                    fill
                ></Image>
                <IndexNavBar/>
                <div className='index-searchbox-container margin-auto-1440 centre'>
                    <SearchBox/>
                </div>
            </span>
            <p className='curated-txt margin-auto-1440'>Curated photos of day</p>
            <IndexCuratedImages/>
            <Footer/>
        </div>
    )
}