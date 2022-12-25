import React from "react";
import avatar from './../../img/avatar.jpg';
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.header__text}>
        <p>Hello Dave, Welecome back</p>
        <p>Your Dashboard is updated</p>
      </div>
      <div className={classes.header__settings}>
        
        { props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink> } 
        <img src={avatar} alt="avatar" />

      </div>
    </header>
  );
};

export default Header;
