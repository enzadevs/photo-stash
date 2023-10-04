'use client'

import 'styles/test.css'

export default function Test(){
    return(
        <div className='margin-auto-1440 centre'>
            <button onClick={(event)=>{
                window.history.pushState('/')
                window.history.replaceState()
                event.preventDefault()
            }}>
                CLICK ME
            </button>   
        </div>
    )
}