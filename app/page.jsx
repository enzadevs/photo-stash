import 'styles/layouts/index.css'

import { Suspense } from 'react'
import Image from 'next/image'
import IndexBGImage from 'public/images/tree forest.jpg'
import IndexLoading from './loading'
import IndexNavBar from 'components/Navigation/IndexNavBar'
import SearchBox from 'components/Functions/SearchBox'
import IndexCuratedPhotos from 'components/Containers/IndexCuratedPhotos'
import Footer from 'components/Navigation/Footer'

export default function HomePage(){
    return (
        <div className='index-page-container'>
            <span className='index-top-container'>
                <Image
                    src={IndexBGImage}
                    fill
                    className='index-top-bg-image'
                />
                <IndexNavBar/>
                <div className='index-searchbox-container centre'>
                    <SearchBox/>
                </div>
            </span>
            <p className='margin-auto-1440 curated-txt'>Curated photos of day</p>
            <Suspense fallback={<IndexLoading/>}>
                <IndexCuratedPhotos/>
            </Suspense>
            <Footer/>
        </div>
    )
}