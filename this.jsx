'use client'

const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY
import 'styles/layouts/en_layout.css'
import { createContext,useState,useEffect } from 'react'
import GlobalNavBar from 'components/Containers/en/GlobalNavBar'
import Footer from 'components/Navigation/Footer'

export const SearchResultsContext = createContext()

export default function EnLayout({children}){
    const [ resultsArray,setResultsArray ] = useState([])

    const fetchPhotos = async () => {
        const response = await fetch(`https://api.pexels.com/v1/search?query=supercar?page=0&per_page=5`,
            {
                headers: {
                    Authorization: API_KEY,
                },
            }
        )
        const data = await response.json()
        return data.photos
    }

    async function setPhotos(){
        setResultsArray(await fetchPhotos())
    }

    return (
        <div id='en-layout'>
            <SearchResultsContext.Provider value={{resultsArray,setPhotos}}>
                <span className='global-navbar-wrapper'>
                    <GlobalNavBar/>
                </span>
                {children}
            </SearchResultsContext.Provider>
            <Footer/>
        </div>
    )
}