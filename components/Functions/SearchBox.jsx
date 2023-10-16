'use client'

import 'styles/components/searchbox.css'
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { useResultsStore } from 'global_states/QueryResults'

export default function SearchBox({className}){
    const router = useRouter()
    const queryText = useResultsStore(state => state.queryText)
    const updateQueryText = useResultsStore(state => state.updateQueryText)
    const clearInputArea = useResultsStore(state => state.clearInputArea)
    const updateResultsArray = useResultsStore(state => state.updateResultsArray)

    return (
        <span className={className}>
            <input 
                className='search-input-field hw100 transition-fast radius-small'
                type='text'
                placeholder='Type here...'
                maxLength={48}
                value={queryText}
                onChange={e => updateQueryText(e.currentTarget.value)}    
                onKeyUp={(e) =>{
                    if(e.key === 'Enter' && queryText !== ''){
                        router.push('/core/search')
                        updateResultsArray()
                        clearInputArea()
                    } else return
                }}
            ></input>
            <span
                className='search-icon-wrapper centre transition-fast radius-small '
                onClick={()=>{
                    if( queryText === '') {
                        return
                    } else {
                        router.push('/core/search')
                        updateResultsArray()
                        clearInputArea()
                    }
                }}
            ><BsSearch className='icons'/></span>
        </span>
    )
}