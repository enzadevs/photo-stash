'use client'

import 'styles/components/searchbox.css'
import { useContext } from 'react'
import { InputTextValue,ResultsContext } from 'contexts/SearchContext'
import { BsSearch } from 'react-icons/bs'

export default function SearchBox(){
    let {inputTextValue,handleInputTextValueChange} = useContext(InputTextValue)
    let {handleFetchSearchQueryResults} = useContext(ResultsContext)

    return (
        <span className='searchbox-wrapper'>
            <input 
                className='search-input-field transition-fast hw100'
                type='text'
                placeholder='Type here...'
                maxLength={48}
                value={inputTextValue}
                onChange={handleInputTextValueChange}
                // onKeyUp={() =>{
                //     if(key.value = 'Enter'){
                //         handleFetchSearchQueryResults()
                //     }
                // }}
            ></input>
            <span 
                className='search-icon-wrapper centre transition-fast'
                onClick={handleFetchSearchQueryResults}
            ><BsSearch className='icons'/>
            </span>
        </span>
    )
}