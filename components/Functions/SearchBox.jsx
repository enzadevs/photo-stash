'use client'

import 'styles/components/searchbox.css'
import { BsSearch } from 'react-icons/bs'

export default function SearchBox(){
    return (
        <span className='searchbox-wrapper'>
            <input 
                className='search-input-field transition-fast hw100'
                type='text'
                placeholder='Type here...'
                maxLength={48}
            ></input>
            <span className='search-icon-wrapper centre transition-fast'>
                <BsSearch className='icons'/>
            </span>
        </span>
    )
}