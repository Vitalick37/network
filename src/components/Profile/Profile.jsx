import React from "react";
import styles from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Navigate } from "react-router-dom";



const Profile = (props) => {

  // if (props.isAuth == false) return <Navigate to="/login"/>

  return (
    <div className={styles.profile}>
      <div className={styles.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
