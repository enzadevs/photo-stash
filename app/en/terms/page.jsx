import Link from 'next/link'

export default function TermsPage(){
    return (
        <div className='terms-and-policies-page margin-auto-1440 centre'>
            <h3 className='terms-header'>Welcome to Photo Stash.</h3>
            <span className='terms-container radius-small'>
                <p>Terms of usage:</p>
                <li>All photos you will find on this website are from Pexels API. You can find out more <Link href='https://www.pexels.com/api/documentation/?language=javascript' className='next-link term-links' target='_blank'>here</Link>.</li>
                <li>If you are going to use any photo from this website, please make sure to set source of image (aka Pexels url) in your project/video/gallery. You can find all needed information in Photo page.</li>
                <li>By default, download quality is 4K. If you need to download image in original quality, please go to Pexels website. Link will be provided in Photo page.</li>
            </span>
        </div>
    )
}