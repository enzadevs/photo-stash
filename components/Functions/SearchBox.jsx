'use client'

import 'styles/components/searchbox.css'
import { useContext } from 'react'
import { InputTextValue,ResultsContext } from 'contexts/SearchContext'
import { BsSearch } from 'react-icons/bs'

export default function SearchBox(){
    const {inputTextRef,handleFetchPhotos} = useContext(InputTextValue)

    return (
        <span className='searchbox-wrapper radius-small'>
            <input 
                className='search-input-field transition-fast radius-small hw100'
                type='text'
                placeholder='Type here...'
                maxLength={48}
                ref={inputTextRef}
                onKeyUp={(e) =>{
                    if(e.key === 'Enter'){
                        handleFetchPhotos()
                    }
                }}
            ></input>
            <span
                href='/en/search' 
                className='search-icon-wrapper radius-small centre transition-fast'
                onClick={handleFetchPhotos}
            ><BsSearch className='icons'/></span>
        </span>
    )
}