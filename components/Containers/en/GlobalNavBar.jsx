'use client'

import 'styles/layouts/navbar.css'
import SearchBox from 'components/Functions/SearchBox'
import GlobalSignUpButton from './GlobalSignUpButton'
import GlobalThemeSwitcher from './GlobalThemeSwitcher'
import Link from 'next/link'

export default function GlobalNavBar(){
    return (
        <nav id='global-navbar' className='margin-auto-1440'>
            <Link className='global-company-header next-link transition-fast radius-small' href='/'>
                <h1>Photo <span className='stash-txt'>Stash</span></h1>
            </Link>
            <span className='global-srchbx-wrapper centre'>
                <SearchBox/>
            </span>
            <span className='global-nav-bar-buttons'>
                <GlobalSignUpButton/>
                <GlobalThemeSwitcher/>
            </span>
        </nav>
    )
}