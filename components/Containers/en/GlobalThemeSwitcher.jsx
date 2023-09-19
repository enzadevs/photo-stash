'use client'

import { useContext } from 'react'
import { ThemeContext } from 'contexts/RootContext'
import {BsMoonStars} from 'react-icons/bs'

export default function GlobalThemeSwitcher(){
    const {handleThemeChange} = useContext(ThemeContext)

    return (
        <div 
            className='global-theme-switch-wrapper radius-small centre transition-fast'
            onClick={handleThemeChange}
        ><BsMoonStars className='icons'/>
        </div>
    )
}