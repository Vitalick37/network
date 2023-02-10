import React, { useState } from "react";
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

  let portionSize = 10;

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumbet] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;
  console.log(portionNumber);

  return (
  <div className={classes.paginator}>
      {portionNumber > 1 && <button onClick={() => setPortionNumbet(portionNumber - 1)}>PREV</button>}

      <ul className={classes.pages}>
        {pages
        .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p) => {
          return (
            <li
              className={cn(classes.page, props.currentPage === p && classes.pageActive)}
              onClick={(e) => {props.onPageChanged(p);}}
            >{p}</li>
          );
        })}
      </ul>

      {portionCount > portionNumber && <button onClick={() => setPortionNumbet(portionNumber + 1)}>NEXT</button>}
  </div>
  );
};

export default Paginator;
