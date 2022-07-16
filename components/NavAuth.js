import React from 'react'
import Link from 'next/link'

import navStyles from '../styles/Nav.module.css'

const NavAuth = ({ user }) => {

    let text = ''
    if (user === null) {
        text = 'Log In'
    } else {
        text = 'Log Out'
    }

    return (
        <Link href='/login'>
            <a className={navStyles.nav_button}>{text}</a>
        </Link>
    )
}

export default NavAuth