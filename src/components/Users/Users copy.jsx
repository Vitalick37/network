import axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userNoName from '../../img/userNoName.jpg';

const Users = (props) => {

  let getUsers = () => {

      if (props.users.length === 0) {
    
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        
          props.setUsers(response.data.items);
    
        });
      };
  };

  return  (
    <div className={classes.users}>
      <button onClick={getUsers}>get users</button>
      {props.users.map(e => (
        <div className={classes.users_container} key={e.id}>
          <div className={classes.users_right}>
            <div className={classes.users_img}>
              <img src={ e.photos.small != null ? e.photos.small : userNoName} alt="photo"/>
            </div>
            <div>
              {e.followed ? <button onClick={() => {props.unFollow(e.id)}} >Unfollow</button> : <button onClick={() => {props.follow(e.id)}} >Follow</button>}
              
            </div>
          </div>
          <div className={classes.users_left}>
            <div>
              <div className={classes.users_name}>{e.name}</div>
              <div className={classes.users_status}>{e.status}</div>
            </div>
            <div>
              <div className={classes.users_city}>{'e.location.city'}</div>
              <div className={classes.users_country}>{'e.location.country'}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Users;
