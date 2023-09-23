import 'styles/layouts/navbar.css'

import Link from 'next/link'
import SearchBox from 'components/Functions/SearchBox'
import ProfileBoard from 'components/Functions/ProfileBoard'

export default function GlobalNavBar(){
    return (
        <nav id='global-navbar' className='margin-auto-1440'>
            <Link className='global-header-link next-link transition-fast radius-small' href='/'>
                <h1>Photo <span className='stash-txt'>Stash</span></h1>
            </Link>
            <span className='global-searchbox-wrapper'>
                <SearchBox/>
            </span>
            <ProfileBoard
                styles={'global-signup-link next-link radius-small centre transition-fast'}
            />
        </nav>
    )
}