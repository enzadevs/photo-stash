'use client'

import 'styles/components/searchbox.css'
import { BsSearch } from 'react-icons/bs'
import { useResultsStore } from 'components/Containers/QueryResults'

export default function SearchBox({className}){
    const queryText = useResultsStore(state => state.queryText)
    const updateQueryText = useResultsStore(state => state.updateQueryText)
    const updateResultsArray = useResultsStore(state => state.updateResultsArray)

    return (
        <span className={className}>
            <input 
                className='search-input-field transition-fast radius-small hw100'
                type='text'
                placeholder='Type here...'
                maxLength={48}
                value={queryText}
                onChange={e => updateQueryText(e.currentTarget.value)}    
                onKeyUp={(e) =>{
                    if(e.key === 'Enter'){
                        updateResultsArray()
                    } else return
                }}
            ></input>
            <span
                href='/en/search' 
                className='search-icon-wrapper radius-small centre transition-fast'
                onClick={()=>{
                    updateResultsArray()
                }}
            ><BsSearch className='icons'/></span>
        </span>
    )
}