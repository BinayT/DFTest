import React from 'react'
import Link from 'next/link'

const NavAuth = ({ user }) => {

    let text = ''
    if (user === null) {
        text = 'Log In'
    } else {
        text = 'Log Out'
    }

    return (
        <Link href='/login'>
            {text}
        </Link>
    )
}

export default NavAuth