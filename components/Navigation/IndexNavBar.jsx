import 'styles/layouts/navbar.css'

import Link from 'next/link'
import SignUp from 'components/Functions/SignUp'
import ThemeSwitcher from 'components/Functions/ThemeSwitch'

export default function IndexNavBar(){
    return (
        <nav id='index-navbar' className='margin-auto-1440'>
            <Link className='next-link company-header-link transition-fast' href='/'>
                <h1>Photo <span className='stash-txt'>Stash</span></h1>
            </Link>
            <span className='index-nav-bar-buttons'>
                <SignUp/>
                <ThemeSwitcher/>
            </span>
        </nav>
    )
}