'use client'

export default function Error({reset}){
    return (
        <div className='error-page margin-auto-1440'>
            <h2 className='error-header radius-small'>Something went wrong.</h2>
            <button onClick={()=>{reset()}} className='error-button transition-fast radius-small'>
                Try again
            </button>
        </div>
    )
}