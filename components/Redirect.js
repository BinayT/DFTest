import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import navStyles from '../styles/Nav.module.css'

const Redirect = () => {
    return (
        <>
            <Head>
                <title>Login Error | Login to view users</title>
                <meta name="description" content="You cannot view the users without logging in" />
                <link rel="icon" href="/logoDanelfin.ico" />
            </Head>

            <div className='container'>
                <h3 style={{ marginBottom: '30px' }}>To view the content of this page, you must first log in.</h3>
                <Link href='/login'>
                    <a className={navStyles.nav_button}
                        style={{ color: 'black', border: '1px solid black' }}>
                        Log In
                    </a>
                </Link>
            </div>
        </>
    )
}

export default Redirect