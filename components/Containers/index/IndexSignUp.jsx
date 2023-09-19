import Link from "next/link"

export default function IndexSignUp(){
    return (
        <Link
            href='/en/signup'
            className='next-link signup-wrapper radius-small centre transition-fast'
            id='global-signup-wrapper'
        >Sign Up</Link>
    )
}