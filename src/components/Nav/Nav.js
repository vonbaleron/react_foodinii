import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => (
    <ul className={styles.wrapper}>
        <li className={styles.item}>
            <NavLink exact 
            activeClassName={styles.itemLinkActive} 
            className={styles.itemLink} to="/">
                Breakfasts</NavLink>
            </li>
        <li className={styles.item}>
            <NavLink 
            activeClassName={styles.itemLinkActive} 
            className={styles.itemLink} to="/dinners">
                Dinners</NavLink>
            </li>
        <li className={styles.item}>
            <NavLink 
            activeClassName={styles.itemLinkActive} 
            className={styles.itemLink} to="/lunches">
                Lunches</NavLink>
            </li>
    </ul>
);

export default Nav;