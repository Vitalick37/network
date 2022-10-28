import React from "react";
import avatar from './../../img/avatar.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__text}>
        <p>Hello Dave, Welecome back</p>
        <p>Your Dashboard is updated</p>
      </div>
      <div className={classes.header__settings}>
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
