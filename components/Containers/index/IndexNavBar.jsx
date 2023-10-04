import 'styles/layouts/navbar.css'

import Link from 'next/link'

export default function IndexNavBar(){
    return (
        <nav id='index-navbar' className='margin-auto-1440'>
            <Link className='company-header-link next-link transition-fast radius-small' href='/'>
                <h1>Photo <span className='stash-txt'>Stash</span></h1>
            </Link>
        </nav>
    )
}