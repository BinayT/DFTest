import { useSelector } from 'react-redux'
import Link from 'next/link'

import NavAuth from './NavAuth'

import navStyles from '../styles/Nav.module.css'

const Navbar = () => {
    const { user } = useSelector(state => state.user)

    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li className={navStyles.nav__auth__button}>
                    <NavAuth user={user} />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar