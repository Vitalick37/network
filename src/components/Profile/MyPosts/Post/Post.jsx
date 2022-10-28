import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__avatar}></div>
      <div className={styles.post__text}>{props.message}</div>
      <div>like {props.like}</div>
    </div>
  );
};

export default Post;
