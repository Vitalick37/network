import React from "react";
import classes from "./Users.module.css";
import cn from "classnames";
import userNoName from "../../img/userNoName.jpg";

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
                <img
                src={e.photos.small != null ? e.photos.small : userNoName}
                alt="photo"
                />
            </div>
            <div>
                {e.followed ? (
                <button
                    onClick={() => {
                    props.unFollow(e.id);
                    }}
                >
                    Unfollow
                </button>
                ) : (
                <button
                    onClick={() => {
                    props.follow(e.id);
                    }}
                >
                    Follow
                </button>
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
