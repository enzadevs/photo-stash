import Link from 'next/link'

export default function ProfileBoard({styles}){
    return (
        <Link
            href='/en/signup'
            className={styles}
        >Sign Up</Link>
    )
}