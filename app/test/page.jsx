'use client'

import 'styles/test.css'

export default function Test(){

    return(
        <div className='margin-auto-1440 centre'>
            <button onClick={()=>{
                window.history.assign('',"",'/en/search')
            }}>
                CLICK ME
            </button>   
        </div>
    )
}