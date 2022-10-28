import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.content}>
        <ProfileInfo />
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
