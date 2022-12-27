import React from "react";
import classes from "./Users.module.css";
import cn from "classnames";
import userNoName from "../../img/userNoName.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { getFollow, getUnFollow } from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.count / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.users}>
      <ul className={classes.pages}>
        {pages.map((p) => {
          return (
            <li
              className={cn(
                classes.page,
                props.currentPage === p && classes.pageActive
              )}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </li>
          );
        })}
      </ul>

      {props.users.map((e) => (
        <div className={classes.users_container} key={e.id}>
          <div className={classes.users_right}>
            <div className={classes.users_img}>
              <NavLink to={"/profile" + "/" + e.id}>
                <img
                  src={e.photos.small != null ? e.photos.small : userNoName}
                  alt="photo"
                />
              </NavLink>
            </div>
            <div>
              {e.followed ? (
                <button
                  disabled={props.followingInProgress.some(id => id === e.id)}
                  onClick={() => {
                    props.toggleFollowingInProgress(true, e.id);
                    getUnFollow(e.id)
                      .then((data) => {
                        // debugger;
                        if (data.resultCode === 0) {
                          props.unFollow(e.id);
                        }
                        props.toggleFollowingInProgress(false, e.id);
                      });
                  }}

                >Unfollow</button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(id => id === e.id)}
                  onClick={() => {
                    props.toggleFollowingInProgress(true, e.id);
                    getFollow(e.id)
                      .then((data) => {
                        // debugger;
                        if (data.resultCode === 0) {
                          props.follow(e.id);
                        }
                        props.toggleFollowingInProgress(false, e.id);
                      });
                  }}

                >Follow</button>
              )}
            </div>
          </div>
          <div className={classes.users_left}>
            <div>
              <div className={classes.users_name}>{e.name}</div>
              <div className={classes.users_status}>{e.status}</div>
            </div>
            <div>
              <div className={classes.users_city}>{"e.location.city"}</div>
              <div className={classes.users_country}>
                {"e.location.country"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
