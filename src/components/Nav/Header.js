import React from 'react';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';
import Nav from './Nav';


const Header = () => (
    <header className={styles.wrapper}>
        <img className={styles.logo} src={logoImage} alt="logo">
        </img>
        <Nav/>
    </header>
);

export default Header;