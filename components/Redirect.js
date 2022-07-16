import React from 'react'
import Link from 'next/link'

import navStyles from '../styles/Nav.module.css'

const Redirect = () => {
    return (
        <div className='container'>
            <h3 style={{ marginBottom: '30px' }}>To view the content of this page, you must first log in.</h3>
            <Link href='/login'>
                <a className={navStyles.nav_button}
                    style={{ color: 'black', border: '1px solid black' }}>
                    Log In
                </a>
            </Link>
        </div>
    )
}

export default Redirect