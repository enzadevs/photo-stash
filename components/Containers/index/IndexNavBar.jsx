import 'styles/layouts/navbar.css'

import Link from 'next/link'
import {BiSolidHeart} from 'react-icons/bi'

export default function IndexNavBar(){
    return (
        <nav id='index-navbar' className='margin-auto-1440'>
            <Link className='company-header-link next-link transition-fast centre radius-small' href='/'>
                <h1>Photo</h1><h1 className='stash-txt'>Stash</h1>
            </Link>
            <Link href='/en/favourites' className='index-heart-wrapper next-link centre radius-small transition'>
                <BiSolidHeart className='heart-icon'/>
            </Link>
        </nav>
    )
}