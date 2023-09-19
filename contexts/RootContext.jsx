'use client'

import { createContext,useState,useEffect } from 'react'
export const ThemeContext = createContext()
export const IsSignedInContext = createContext()

export default function ThemeContextProvider({children}){
    const [ isSignedIn,setIsSignedIn ] = useState(false)
    const [ activeTheme,setActiveTheme ] = useState('light')
    const inActiveTheme = activeTheme === 'light' ? 'dark' : 'light'

    useEffect(() =>{
        document.body.dataset.theme = activeTheme
    }, [activeTheme])

    function handleThemeChange(){
        setActiveTheme(inActiveTheme)
        console.log(activeTheme)
    }

    return (
        <ThemeContext.Provider value={{activeTheme,handleThemeChange}}>
            <IsSignedInContext.Provider value={[isSignedIn]}>
                {children}
            </IsSignedInContext.Provider>
        </ThemeContext.Provider>
    )
}