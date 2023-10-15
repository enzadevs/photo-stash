import './layout.css'
import GlobalNavBar from 'components/Containers/core/GlobalNavBar'

export default function CoreLayout({children}){
    return (
        <div>
            <span className='global-navbar-wrapper'>
                <GlobalNavBar/>
            </span>
            {children}
        </div>
    )
}