import 'styles/layouts/index.css'

import { Suspense } from 'react'
import { lazy } from 'react'
import Image from 'next/image'
import IndexBGImage from 'public/images/beautiful-trees-lake-rubber-plantation-kerala-india.jpg'
import SearchResultsProvider from 'contexts/SearchContext'
import IndexNavBar from 'components/Containers/index/IndexNavBar'
import SearchBox from 'components/Functions/SearchBox'
import Footer from 'components/Navigation/Footer'
import ImagesLoading from 'components/Functions/ImagesLoading'
const IndexCuratedImages = lazy(() => import('components/Containers/index/IndexCuratedImages'))

export default function HomePage(){

    return (
        <div className='index-page-container'>
            <span className='index-top-container'>
                <Image
                    className='index-bg-image'
                    src={IndexBGImage}
                    quality={50}
                    fill
                ></Image>
                <IndexNavBar/>
                <SearchResultsProvider>
                    <div className='index-searchbox-container margin-auto-1440 centre'>
                        <SearchBox/>
                    </div>
                </SearchResultsProvider>
            </span>
            <p className='curated-txt margin-auto-1440'>Curated photos of day</p>
            <Suspense fallback={<ImagesLoading/>}>
                <IndexCuratedImages/>
            </Suspense>
            <Footer/>
        </div>
    )
}