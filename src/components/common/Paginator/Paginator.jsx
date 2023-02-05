import React from "react";
import classes from "../../Users/Users.module.css";
import cn from "classnames";
import userNoName from "../../../img/userNoName.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../../api/api";
import { follow, unFollow } from "../../../redux/usersReduser";

const Paginator = (props) => {
  
  let pagesCount = Math.ceil(props.count / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (

      <ul className={classes.pages}>
        {pages.map((p) => {
          return (
            <li
              className={cn(classes.page, props.currentPage === p && classes.pageActive)}
              onClick={(e) => {props.onPageChanged(p);}}
            >{p}</li>
          );
        })}
      </ul>

  );
};

export default Paginator;
