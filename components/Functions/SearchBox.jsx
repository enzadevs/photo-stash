'use client'

import 'styles/components/searchbox.css'
import Link from 'next/link'
import { useContext } from 'react'
import { InputTextValue,ResultsContext } from 'contexts/SearchContext'
import { BsSearch } from 'react-icons/bs'

export default function SearchBox(){
    let {inputTextValue,handleInputTextValueChange} = useContext(InputTextValue)
    let {handleFetchSearchQueryResults} = useContext(ResultsContext)

    return (
        <span className='searchbox-wrapper radius-small'>
            <input 
                className='search-input-field transition-fast radius-small hw100'
                type='text'
                placeholder='Type here...'
                maxLength={48}
                value={inputTextValue}
                onChange={handleInputTextValueChange}
                onKeyUp={(e) =>{
                    if(e.key === 'Enter'){
                        handleFetchSearchQueryResults()
                    }
                }}
            ></input>
            <span
                href='/en/search' 
                className='search-icon-wrapper radius-small centre transition-fast'
                onClick={()=>{handleFetchSearchQueryResults}}
            ><BsSearch className='icons'/></span>
        </span>
    )
}