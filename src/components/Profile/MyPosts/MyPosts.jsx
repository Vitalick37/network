import React from "react";
import styles from "./MyPosts.module.css";
import Post from './Post/Post';



const MyPosts = (props) => {
  return (
    <div className={styles.posts}>
      <p className={styles.posts__title}>My Posts</p>
      <div className={styles.posts__content}>
        {props.dataPost.map(({id, post, likesCount}) => 
          <Post message = {post} like = {likesCount} key={id}/>
        )}
      </div>
    </div>
  );
};

export default MyPosts;
