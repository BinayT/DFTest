import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

import { setUser } from '../redux/slices/userSlice'
import NavAuth from './NavAuth'
import navStyles from '../styles/Nav.module.css'

const Navbar = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    const logout = () => {
        dispatch(setUser(null))
    }

    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'><a className={navStyles.nav_button}>Home</a></Link>
                </li>
                <li className={navStyles.nav__auth__button} onClick={user !== null ? logout : undefined}>
                    <NavAuth user={user} />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar