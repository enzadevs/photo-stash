import 'styles/layouts/index.css'

import { Suspense } from 'react'
import IndexLoading from './loading'
import IndexNavBar from 'components/Navigation/IndexNavBar'
import SearchBox from 'components/Functions/SearchBox'
import IndexCuratedPhotos from 'components/Containers/IndexCuratedPhotos'
import Footer from 'components/Navigation/Footer'

export default function HomePage(){
    return (
        <div className='index-page-container'>
            <span className='index-top-container'>
                <IndexNavBar/>
                <div className='index-searchbox-container centre'>
                    <SearchBox/>
                </div>
            </span>
            <Suspense fallback={<IndexLoading/>}>
                <IndexCuratedPhotos/>
            </Suspense>
            <Footer/>
        </div>
    )
}