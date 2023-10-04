import 'styles/layouts/navbar.css'

import Link from 'next/link'
import SearchBox from 'components/Functions/SearchBox'

export default function GlobalNavBar(){
    return (
        <nav id='global-navbar' className='margin-auto-1440'>
            <Link className='global-header-link next-link transition-fast radius-small centre' href='/'>
                <h1>Photo <span className='stash-txt'>Stash</span></h1>
            </Link>
            <span className='global-searchbox-wrapper centre'>
                <SearchBox/>
            </span>
        </nav>
    )
}