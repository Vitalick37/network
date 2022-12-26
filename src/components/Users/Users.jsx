import React from "react";
import classes from "./Users.module.css";
import cn from "classnames";
import userNoName from "../../img/userNoName.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                  onClick={() => {

                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${e.id}`, { 
                            withCredentials: true, 
                            headers: {
                                "API-KEY": 'd3e9db55-8986-4705-a8d3-b42af80b5ce1',
                            },
                        }
                      )
                      .then((response) => {
                        // debugger;
                        if (response.data.resultCode === 0) {
                          props.unFollow(e.id);
                        }
                      });
                  }}

                >Unfollow</button>
              ) : (
                <button
                  onClick={() => {

                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${e.id}`, null, { 
                            withCredentials: true,
                            headers: {
                                "API-KEY": 'd3e9db55-8986-4705-a8d3-b42af80b5ce1',
                            },
                        }
                      )
                      .then((response) => {
                        // debugger;
                        if (response.data.resultCode === 0) {
                          props.follow(e.id);
                        }
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
