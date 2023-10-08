import 'styles/layouts/navbar.css'

import Link from 'next/link'
import SearchBox from 'components/Functions/SearchBox'
import {BiSolidHeart} from 'react-icons/bi'

export default function GlobalNavBar(){

    return (
        <nav id='global-navbar' className='margin-auto-1440'>
            <Link className='global-header-link next-link transition-fast radius-small centre' href='/'>
                <h1>Photo</h1><h1 className='stash-txt'>Stash</h1>
            </Link>
            <span className='global-searchbox-wrapper centre'>
                <SearchBox
                    className='global-searchbox'
                />
            </span>
            <Link href='/en/favourites' className='global-heart-wrapper next-link centre radius-small transition'>
                <BiSolidHeart className='heart-icon'/>
            </Link>
        </nav>
    )
}