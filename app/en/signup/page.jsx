'use client'

import 'styles/layouts/signup.css'
import { useContext,useState } from 'react'
import { IsSignedInContext } from 'contexts/RootContext'
import RegistrationForm from 'components/Navigation/RegistrationForm'
import LoginForm from 'components/Navigation/LoginForm'

export default function SignUpPage(){
    const {isSignedIn,handleFormSubmit} = useContext(IsSignedInContext)
    const [ hasAccount,setHasAccount ] = useState(false)
    const noAccount = hasAccount === false ? true : false

    function handleHasAccount(){
        setHasAccount(noAccount)
    }

    return (
        <div className='signup-page centre'>
            <div className='signup-container radius-small'>
                <div className='top-left-shape'></div>
                    <h3 className='signup-header'>Welcome to PhotoStash!</h3>
                    <span className='form-wrapper'>
                        {hasAccount ? 
                            <LoginForm 
                                changeHasAccount={handleHasAccount}
                            /> 
                                : 
                            <RegistrationForm 
                                changeHasAccount={handleHasAccount}
                            />}
                    </span>
                <div className='bottom-right-shape'></div>
            </div>
        </div>
    )
}