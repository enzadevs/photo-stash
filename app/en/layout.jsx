import 'styles/layouts/en_layout.css'
import GlobalNavBar from 'components/Containers/en/GlobalNavBar'
import Footer from 'components/Navigation/Footer'

export default function EnLayout({children}){
    return (
        <div id='en-layout'>
            <span className='global-navbar-wrapper'>
                <GlobalNavBar/>
            </span>
            {children}
            <Footer/>
        </div>
    )
}