'use client'

import 'styles/components/searchbox.css'
import { BsSearch } from 'react-icons/bs'
import { useResultsStore } from 'components/Containers/QueryResults'
import { usePrintInputFieldValue } from 'components/Containers/QueryResults'

export default function SearchBox(){
    const queryText = useResultsStore(state => state.queryText)
    const updateQueryText = useResultsStore(state => state.updateQueryText)
    const updateResultsArray = useResultsStore(state => state.updateResultsArray)

    return (
        <span className='searchbox-wrapper radius-small'>
            <input 
                className='search-input-field transition-fast radius-small hw100'
                type='text'
                placeholder='Type here...'
                maxLength={48}
                value={queryText}
                onChange={e => updateQueryText(e.currentTarget.value)}    
                onKeyUp={(e) =>{
                    if(e.key === 'Enter' && window.location.pathname !== 'en/search'){
                        window.location.pathname = 'en/search'
                    } else {
                        console.log(true)
                    }
                }}
            ></input>
            <span
                href='/en/search' 
                className='search-icon-wrapper radius-small centre transition-fast'
                onClick={()=>{
                    if(window.location.pathname !== '/en/search'){
                        window.location.pathname = 'en/search'
                    } else {
                        console.log(true)
                    }
                }}
            ><BsSearch className='icons'/></span>
        </span>
    )
}