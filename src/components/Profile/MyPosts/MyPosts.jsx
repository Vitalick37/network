import React from "react";
import styles from "./MyPosts.module.css";
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { reduxForm, Field } from "redux-form";




const MyPosts = (props) => {

  let postElement = props.posts.map(({id, post, likesCount}) => <Post message = {post} like = {likesCount} key={id}/>);
  // let newPostElement = React.createRef();

  // let addPostButton = () => {
  //   // props.dispatch(addPostActionCreator())
  //   props.addPost();
  // };

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  //   // let action = updateNewPostTextActionCreator(text);
  //   // props.dispatch(action);
  // };

  let onAddPost = (value) => {
    props.addPost(value.newPostText);
  }

  return (
    
    <div className={styles.posts}>

      <p className={styles.posts__title}>My Posts</p>

      <PostReduxForm onSubmit={onAddPost}/>


      <div className={styles.posts__content}>
        {postElement}
      </div>

    </div>
  );
};

const addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component='textarea' name='newPostText'/>
      <button>add post</button>
      {/* <textarea ref={newPostElement} onChange={onPostChange} name="text" cols="20" rows="5" value={props.dataNewPost} /> */}
      {/* <button onClick={addPostButton}>add post</button> */}
    </form>
  )
}

const PostReduxForm = reduxForm({
  form: 'PostaddNewPostForm',
})(addNewPostForm)

export default MyPosts;
