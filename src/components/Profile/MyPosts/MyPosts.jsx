import React from "react";
import styles from "./MyPosts.module.css";
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/vatidators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(10);


const MyPosts = (props) => {

  let postElement = props.posts.map(({id, post, likesCount}) => <Post message = {post} like = {likesCount} key={id}/>);

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
      <Field component={Textarea} name='newPostText' validate={[required, maxLength10]}/>
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
