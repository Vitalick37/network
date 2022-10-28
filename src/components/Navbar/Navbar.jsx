import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>socializer</div>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>Overview</li>
        <li className={styles.nav__item}>Leaderboard</li>
        <li className={styles.nav__item}>Spreadsheets</li>
        <li className={styles.nav__item}>Administration</li>
        <li className={styles.nav__item}><NavLink className={styles.nav__link} to="/profile">Profile</NavLink></li>
        <li className={styles.nav__item}><NavLink className={styles.nav__link} to="/dialogs">Messadge</NavLink></li>
        <li className={styles.nav__item}><NavLink className={styles.nav__link} to="/news">News</NavLink></li>
        <li className={styles.nav__item}><NavLink className={styles.nav__link} to="/music">Music</NavLink></li>
        <li className={styles.nav__item}><NavLink className={styles.nav__link} to="/setting">Setting</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
