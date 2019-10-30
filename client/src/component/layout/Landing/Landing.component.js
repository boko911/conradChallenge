import React from 'react';
import Header from '../Header/Header.component'
import Footer from '../Footer/Footer.component';
import Search from '../../search/Search/Search.component';
import styles from '../Landing/Landing.module.css'

const Landing = () => {
    return (
        <div className={styles.container}> 
            <Header/>
            <Search/>
            <Footer/>
        </div>
    )
}

export default Landing