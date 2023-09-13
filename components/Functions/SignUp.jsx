import Link from "next/link"


export default function SignUp(){
    return (
        <Link
            href='/en/signup'
            className='next-link signup-wrapper radius-small centre transition-fast'
        >Sign Up</Link>
    )
}