import React from 'react'
import Link from 'next/link'

const Redirect = () => {
    return (
        <div className='container'>
            <h3>To view the content of this page, you must first log in.</h3>
            <button><Link href="/login">Log in</Link></button>
        </div>
    )
}

export default Redirect