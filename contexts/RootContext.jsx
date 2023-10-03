'use client'

import { createContext,useState } from 'react'

export const IsSignedInContext = createContext()

export default function SignUpContextProvider({children}){
    const [ isSignedIn,setIsSignedIn ] = useState(false)

    return (
        <IsSignedInContext.Provider value={{isSignedIn}}>
            {children}
        </IsSignedInContext.Provider>
    )
}