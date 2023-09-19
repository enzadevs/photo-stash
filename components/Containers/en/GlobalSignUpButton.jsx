import Link from "next/link"

export default function GlobalSignUpButton(){
    return (
        <Link
            href='/en/signup'
            className='global-signup-wrapper next-link radius-small centre transition-fast'
        >Sign Up</Link>
    )
}