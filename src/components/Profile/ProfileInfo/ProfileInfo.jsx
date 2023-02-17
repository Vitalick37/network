import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import userNoName from "../../../img/userNoName.jpg";
import ProfileDataForm from "./ProfileDataForm";
import { useState } from "react";

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={styles.content__ability}>
      <img
        src={props.profile.photos.small || userNoName}
        className={styles.content__img}
        alt="photo"
      />

      {props.isOwner && (
        <input
          className={styles.content__btn}
          type={"file"}
          onChange={onMainPhotoSelected}
        />
      )}

      {editMode 
        ? <ProfileDataForm profile={props.profile} /> 
        : <ProfileData profile={props.profile} isOwner={props.isOwner} toEditMode={() => {setEditMode(true)}}/>}

      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />

      <p>What’s your plan?</p>
      <p>Looks like a shady day</p>
      <p>36°</p>
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <>
    {props.isOwner && <button onClick={props.toEditMode}>edit</button>}

      <div>Full Name: {props.profile.fullName}</div>

      <div>
        Looking for a job: {props.profile.lookongForAJob ? "yes" : "no"}
      </div>

      {props.profile.lookongForAJob && (
        <div>
          My professional skills: {props.profile.lookongForAJobDescroption}
        </div>
      )}

      <div>About me: {props.profile.aboutMeb}</div>
      <div>
        Contacts:
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div>
    </>
  );
};

// const ProfileDataForm = ({ profile }) => {
//   return <>
//     Form
//   </>
// };

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      {contactTitle}: {contactValue}
    </div>
  );
};

export default ProfileInfo;
