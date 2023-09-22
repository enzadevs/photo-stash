import Link from 'next/link'

export default function ProfileBoard(){
    return (
        <Link
            href='/en/signup'
            className='signup-link next-link radius-small centre transition-fast'
            id='global-signup-wrapper'
        >Sign Up</Link>
    )
}