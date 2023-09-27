import {GoMail} from 'react-icons/go'
import {RiLockPasswordLine} from 'react-icons/ri'

export default function LoginForm({changeHasAccount}){
    return (
        <div className='login-container'>
            <p className='fill-text'>
                Log in with email address
            </p>
            <span className='input-wrapper'>
                <span className='input-icons-wrapper centre'>
                    <GoMail className='form-input-icons icons '/>
                </span>
                <input 
                    className='signup-input-field transition-fast radius-small'
                    placeholder='Email address'
                    type='email'
                    maxLength={32}
                    required
                ></input>
            </span>
            <span className='input-wrapper'>
                <span className='input-icons-wrapper centre'>
                    <RiLockPasswordLine className='form-input-icons icons '/>
                </span>
                <input 
                    className='signup-input-field transition-fast radius-small'
                    placeholder='Enter your password'
                    type='password'
                    maxLength={24}
                    required
                ></input>
            </span>
            <span className='submit-wrapper'>
                <button 
                    className='form-submit-button radius-small transition-fast hw100'
                    type='submit'
                >Log in</button>
            </span>
            <p className='fill-text'>Don't have an account? Create one <span onClick={changeHasAccount} className='form-link'>here</span></p>
        </div>
    )
}