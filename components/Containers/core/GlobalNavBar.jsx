'use client'

import 'styles/layouts/navbar.css'
import useScreenSize from 'components/Navigation/useScreenSize'
import Link from 'next/link'
import SearchBox from 'components/Functions/SearchBox'
import {BiSolidHeart} from 'react-icons/bi'

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

    function Logo(){
        if (width < 770) {
            return <ShortLogo/>
        } else {
            return <DefaultLogo/>
        }
    }

    return (
        <nav id='global-navbar' className='margin-auto-1440'>
            <Logo/>
            <span className='global-searchbox-wrapper centre'>
                <SearchBox
                    className='global-searchbox'
                />
            </span>
            <Link href='/en/favourites' className='global-heart-wrapper next-link centre radius-small transition-fast'>
                <BiSolidHeart className='heart-icon'/>
            </Link>
        </nav>
    )
}