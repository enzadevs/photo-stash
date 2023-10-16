import 'styles/layouts/index.css'
import Link from 'next/link'
import Image from 'next/image'
import IndexBGImage from 'public/images/beautiful-trees-lake-rubber-plantation-kerala-india.jpg'
import IndexNavBar from 'components/Containers/index/IndexNavBar'
import SearchBox from 'components/Functions/SearchBox'
import IndexCuratedImages from 'components/Containers/index/IndexCuratedImages'
import { Suspense } from 'react'
import IndexLoading from 'components/Functions/IndexLoading'

export default function HomePage(){
    return (
        <div className='index-page-container'>
            <span className='index-top-container'>
                <Image
                    className='index-bg-image'
                    src={IndexBGImage}
                    alt='green trees in india'
                    priority={true}
                    fill
                    sizes='100vw'
                ></Image>
                <IndexNavBar/>
                <div className='index-searchbox-container margin-auto-1440 centre'>
                    <SearchBox
                        className='index-searchbox'
                    />
                </div>
            </span>
            <p className='curated-txt margin-auto-1440'>Curated photos of day</p>
            <div className='index-min-height'>
                <Suspense fallback={<IndexLoading/>}>
                    <IndexCuratedImages/>
                </Suspense>
                <span className='curated-link-container centre'>
                    <Link href='/core/curated' className='curated-button centre transition-fast radius-small'>
                        More curated photos
                    </Link>
                </span>
            </div>
        </div>
    )
}