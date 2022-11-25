import React from "react";
import styles from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.content}>
        <ProfileInfo />
        <MyPostsContainer 
        // dataPost={props.statePosts.postData} 
        // dataNewPost={props.statePosts.newPostText} 
        // dispatch={props.dispatch}
        // store={props.store}
        />
      </div>
    </div>
  );
};

export default Profile;
