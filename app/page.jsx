import 'styles/layouts/index.css'



import IndexNavBar from 'components/Navigation/IndexNavBar'
import Footer from 'components/Navigation/Footer'



export default function HomePage(){
    return (
        <div className='index-page-container'>
            <span className='index-navbar-wrapper'>
                <IndexNavBar/>
            </span>
            
            <Footer/>
        </div>
    )
}