'use client'

import 'styles/components/searchbox.css'
import { BsSearch } from 'react-icons/bs'

export default function SearchBox(){
    return (
        <span className='searchbox-wrapper radius-small'>
            <input 
                className='search-input-field transition-fast radius-small hw100'
                type='text'
                placeholder='Type here...'
                maxLength={48}
                // onKeyUp={(e) =>{
                //     if(e.key === 'Enter' && window.location.pathname === '/'){
                //         window.location.href = 'en/search'
                //         console.log('woops')
                //     } else if (e.key === 'Enter'){
                //         console.log(true)
                //     }
                // }}
            ></input>
            <span
                href='/en/search' 
                className='search-icon-wrapper radius-small centre transition-fast'
                // onClick={()=>{
                //     if(window.location.pathname === '/'){
                //         window.location.href = 'en/search'
                //         console.log('woops')
                //     } else {
                //         console.log(true)
                //     }
                // }}
            ><BsSearch className='icons'/></span>
        </span>
    )
}