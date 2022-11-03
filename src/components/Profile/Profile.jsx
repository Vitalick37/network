import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.content}>
        <ProfileInfo />
        <MyPosts dataPost={props.statePosts.postData} />
      </div>
    </div>
  );
};

export default Profile;
