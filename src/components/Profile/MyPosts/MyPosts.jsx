import React from "react";
import styles from "./MyPosts.module.css";
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';




const MyPosts = (props) => {

  let postElement = props.posts.map(({id, post, likesCount}) => <Post message = {post} like = {likesCount} key={id}/>);
  let newPostElement = React.createRef();

  let addPostButton = () => {
    // props.dispatch(addPostActionCreator())
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
  };

  return (
    
    <div className={styles.posts}>

      <p className={styles.posts__title}>My Posts</p>

      <textarea ref={newPostElement} onChange={onPostChange} name="text" cols="20" rows="5" value={props.dataNewPost} />

      <button onClick={addPostButton}>add post</button>

      <div className={styles.posts__content}>
        {postElement}
      </div>

    </div>
  );
};

export default MyPosts;
