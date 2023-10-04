'use client'

import 'styles/components/searchbox.css'
import { createClient } from 'pexels'
const client = createClient('DvgO6rCGv7xwho7Jbm2fKH7iCnS91mpoVVTHub7DJl831NJZ1YIKkZlo')

// import { useContext } from 'react'
// import { InputTextValue } from 'contexts/SearchContext'
import { BsSearch } from 'react-icons/bs'
import { useRef,useState,useEffect } from 'react'

export default function SearchBox(){
    // const {inputTextRef,handleFetchPhotos} = useContext(InputTextValue)
    const inputTextRef = useRef('')
    const [ resultsArray,setResultsArray ] = useState([])
    const [ currentPage,setCurrentPage ] = useState(1)
    const [ perPageImages,setPerPageImages ] = useState(5)

    const handleFetchPhotos = async() =>{
        const inputTextValue = inputTextRef.current.value
        const results = await client.photos.search({ query: inputTextValue, page: currentPage ,per_page: perPageImages })
        setResultsArray(results)
        console.log(results)
    }

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
                onClick={()=>{
                    
                }}
            ><BsSearch className='icons'/></span>
        </span>
    )
}