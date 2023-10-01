import {MdAlternateEmail} from 'react-icons/md'
import {BsPersonCircle} from 'react-icons/bs'
import {GoMail} from 'react-icons/go'
import {RiLockPasswordLine} from 'react-icons/ri'

export default function RegistrationForm({changeHasAccount,handleInputTextValueChange}){
    return(
        <form className='registration-container'>
            <p className='fill-text'>Register filling form below:</p>
            <span className='input-wrapper'>
                <span className='input-icons-wrapper centre'>
                    <MdAlternateEmail className='form-input-icons icons '/>
                </span>
                <input 
                    className='signup-input-field transition-fast radius-small'
                    placeholder='Username'
                    type='text'
                    maxLength={24}
                    required
                ></input>
            </span>
            <span className='input-wrapper'>
                <span className='input-icons-wrapper centre'>
                    <BsPersonCircle className='form-input-icons icons '/>
                </span>
                <input 
                    className='signup-input-field transition-fast radius-small'
                    placeholder='Full Name'
                    type='text'
                    maxLength={24}
                    required
                ></input>
            </span>
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
                    placeholder='Type password'
                    type='password'
                    maxLength={24}
                    required
                ></input>
            </span>
            <span className='input-wrapper'>
                <span className='input-icons-wrapper centre'>
                    <RiLockPasswordLine className='form-input-icons icons '/>
                </span>
                <input 
                    className='signup-input-field transition-fast radius-small'
                    placeholder='Confirm password'
                    type='password'
                    maxLength={24}
                    required
                ></input>
            </span>
            <span className='submit-wrapper'>
                <button 
                    className='form-submit-button radius-small transition-fast hw100'
                    type='submit'
                >Register</button>
            </span>
            <p className='fill-text'>Already have an account? Sign in <span onClick={changeHasAccount} className='form-link'>here</span></p>
        </form>
    )
}