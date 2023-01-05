import React from "react";
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { connect } from "react-redux";




// const MyPostsContainer = (props) => {

//   let state = props.store.getState();


//   let addPostButton = () => {
//     props.store.dispatch(addPostActionCreator())
//   };

//   let onPostChange = (text) => {
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//   };

//   return (
//     <MyPosts 
//       updateNewPostText={onPostChange} 
//       addPost={addPostButton} 
//       posts={state.profilePage.postData} 
//       dataNewPost={state.profilePage.newPostText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData,
    dataNewPost: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {

  return {

    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
    // updateNewPostText: (text) => {
    //   dispatch(updateNewPostTextActionCreator(text));
    // },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
