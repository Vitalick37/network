import React from "react";
import styles from "./MyPosts.module.css";
import Post from './Post/Post';

let postData = [
  {
    id: 1,
    post: 'post 1',
    likesCount: 4,
  },
  {
    id: 2,
    post: 'post 2',
    likesCount: 3,
  },
]

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      <p className={styles.posts__title}>My Posts</p>
      <div className={styles.posts__content}>
        {postData.map(({id, post, likesCount}) => 
          <Post message = {post} like = {likesCount} key={id}/>
        )}
      </div>
    </div>
  );
};

export default MyPosts;
