'use client'

import { createContext,useState,useRef } from 'react'

export const IsSignedInContext = createContext()

export default function SignUpContextProvider({children}){
    const [ isSignedIn,setIsSignedIn ] = useState(false)
    const inputTextValueRef = useRef()

    return (
        <IsSignedInContext.Provider value={{isSignedIn}}>
            {children}
        </IsSignedInContext.Provider>
    )
}