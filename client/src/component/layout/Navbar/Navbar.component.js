import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from '../Navbar/Navbar.module.css'
import logo from '../../../assets/img/app-logo.png'

const Navbar = () => {
    return (
            <nav className={styles.main}>  
                <ul className={styles.container}>
                    <NavLink to='/' className={styles.navlink_logo}>
                            <img className={styles.logo} src={logo} alt="App logo"/>
                    </NavLink>
                    <NavLink to='/bookmarks' className={styles.navlink}>
                        Bookmarks
                    </NavLink>
                    <NavLink to='/login' className={styles.navlink}>
                        Login
                    </NavLink>
                </ul>  
            </nav>
        
    )
}


export default Navbar