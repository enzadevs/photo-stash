'use client'

import 'styles/layouts/navbar.css'
import './global-nav-bar.css'
import Link from 'next/link'
import {BiSolidHeart} from 'react-icons/bi'
import SearchBox from 'components/Functions/SearchBox'
import useScreenSize from 'components/Navigation/useScreenSize'

function DefaultLogo(){
    return(
        <Link className='global-header-link next-link transition-fast radius-small centre' href='/'>
            <h1>Photo</h1><h1 className='stash-txt'>Stash</h1>
        </Link>
    )
}

function ShortLogo(){
    return(
        <Link className='short-global-logo next-link transition-fast radius-small centre' href='/'>
            <h1 className='p-letter'>P</h1>
            <h1 className='stash-txt'>S</h1>
        </Link>
    )
}

export default function GlobalNavBar(){
    const {width} = useScreenSize()

    return (
        <nav id='global-navbar' className='margin-auto-1440'>
            {width <= 770 ? <ShortLogo/> : <DefaultLogo/>}
            <span className='global-searchbox-wrapper centre'>
                <SearchBox className='global-searchbox'/>
            </span>
            <Link href='/core/favourites' className='global-heart-wrapper next-link centre radius-small transition-fast'>
                <BiSolidHeart className='heart-icon'/>
            </Link>
        </nav>
    )
}