import React from "react";
import { NavLink, Route, Routes  } from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";
import styles from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div>socializer</div>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}><NavLink className={styles.nav__link} to="/profile">Profile</NavLink></li>
        <li className={styles.nav__item}><NavLink className={styles.nav__link} to="/dialogs">Messadge</NavLink></li>
        <li className={styles.nav__item}><NavLink className={styles.nav__link} to="/users">Users</NavLink></li>
        <li className={styles.nav__item}><NavLink className={styles.nav__link} to="/news">News</NavLink></li>
        <li className={styles.nav__item}><NavLink className={styles.nav__link} to="/music">Music</NavLink></li>
        <li className={styles.nav__item}><NavLink className={styles.nav__link} to="/setting">Setting</NavLink></li>
        {/* <li className={styles.nav__item}>
          <FriendsContainer 
            friendData={props.dataFriends.friendsData} 
        /></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
