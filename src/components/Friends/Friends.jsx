import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Friends.module.css";
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

  return  (
    <div className={styles.friends}>
      <div className={styles.friends__title}>Friends</div>
      <ul className={styles.friends__list}>
        {props.friends.map(({id, name}) => <FriendItem nameItem={name} idItem={id} key={id}/>)}
      </ul>
    </div>
  )
};

export default Friends;
