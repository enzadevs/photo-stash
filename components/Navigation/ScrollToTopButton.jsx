'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop(){
    const [showScrollButton, setShowScrollButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1250) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    }, [])

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className='scroll-to-top'>
            {showTopBtn && (
                <button onClick={goToTop}>
                    Up
                </button>    
            )}
        </div>
    )
}

// ! Scroll to certain element on page
// import { useRef } from react

// const aboutSection = useRef(null)

// <div className="section section2" ref={aboutSection}>
//     <h2>About Us</h2>
// </div>

// const scrollDown = (ref) => {
//     window.scrollTo({
//       top: ref.current.offsetTop,
//       behavior: 'smooth',
//     })
// }

{/* <li className="link" onClick={() => scrollDown(aboutSection)}>
    About Us
</li>
<li className="link" onClick={() => scrollDown(servcesSection)}>
    Services
</li> */}

// <li className="link" onClick={scrollDown}>
//   About Us
// </li>
// <div className="section section3" ref={servcesSection}>
//     <h2>Services</h2>
// </div>