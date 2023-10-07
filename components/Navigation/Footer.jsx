import 'styles/layouts/footer.css'
import Link from 'next/link'

export default function Footer(){
    return (
        <footer>
            <div className='footer-div margin-auto-1440 hw100'>
                <span className='footer-columns'>
                    <h4 className='column-header'>
                        Terms & policies
                    </h4>
                    <span className='footer-links-wrapper'>
                        <Link href='/en/terms&policies' className='next-link footer-links transition-fast'>
                            Terms of usage
                        </Link>
                        <Link href='/en/terms&policies' className='next-link footer-links transition-fast'>
                            Policies
                        </Link>
                    </span>
                </span>
                <span className='footer-columns'>
                    <h4 className='column-header'>
                        Developer Info
                    </h4>
                    <span className='footer-links-wrapper'>
                        <Link href='/en/about' className='next-link footer-links transition-fast'>
                            About
                        </Link>
                        <Link href='/' className='next-link footer-links transition-fast'>
                            Portfolio
                        </Link>
                        <Link href='https://github.com/enzadevs' className='next-link footer-links transition-fast'>
                            Github
                        </Link>
                    </span>
                </span>
            </div>
        </footer>
    )
}