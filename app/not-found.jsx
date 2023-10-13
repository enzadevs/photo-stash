import Link from 'next/link'

export default function GlobalNotFoundPage(){
    return (
        <div className='not-found-div centre'>
            <h3>Ooops! Requested page doesn't exist.</h3>
            <Link href='/' className='not-found-link next-link centre transition-fast radius-small'>
                Go to home
            </Link>
        </div>
    )
}