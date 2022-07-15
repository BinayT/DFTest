import Link from 'next/link'

import navStyles from '../styles/Nav.module.css'

const Navbar = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li className={navStyles.nav__auth__button}>
                    <Link href='/login'>
                        Log In
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar