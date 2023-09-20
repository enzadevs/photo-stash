import { useContext } from 'react'
import SearchResultsProvider from 'contexts/SearchContext'
import GlobalNavBar from "components/Containers/en/GlobalNavBar"
import Footer from "components/Navigation/Footer"

export default function EnLayout({children}){
    return (
        <div id='en-layout'>
            <SearchResultsProvider>
                <span id='global-navbar-wrapper'>
                    <GlobalNavBar/>
                </span>
                {children}
            </SearchResultsProvider>
            <Footer/>
        </div>
    )
}