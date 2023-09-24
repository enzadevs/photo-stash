import 'styles/layouts/en_layout.css'
import SearchResultsProvider from 'contexts/SearchContext'
import GlobalNavBar from 'components/Containers/en/GlobalNavBar'
import Footer from 'components/Navigation/Footer'

export default function EnLayout({children}){
    return (
        <div id='en-layout'>
            <SearchResultsProvider>
                <span className='global-navbar-wrapper'>
                    <GlobalNavBar/>
                </span>
                {children}
            </SearchResultsProvider>
            <Footer/>
        </div>
    )
}